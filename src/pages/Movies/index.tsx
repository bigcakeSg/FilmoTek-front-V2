import { useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { useGetMovieList } from '@/hooks/movies.hooks';
import { axiosInstance } from '@/config/axiosInstance';
import { Link } from '@tanstack/react-router';
import {
  loaderRefStyle,
  moviesContainer,
  moviesContent,
  movieTile
} from './movies.styles';

export default function Movies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const { data: moviesData, fetchNextPage, isFetching } = useGetMovieList();

  const handleTest = async () => {
    try {
      const response = await axiosInstance.get('/auth/me');
      alert(`Hello ${response.data.firstname} ${response.data.lastname}`);
    } catch (error) {
      console.log('Error fetching user data:', error);
      alert('Error fetching user data');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { root: containerRef.current, threshold: 1 }
    );
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [fetchNextPage, loaderRef]);

  const movieList = moviesData?.pages.flatMap((page) => page.data) || [];

  return (
    <div>
      <h3>Liste de films</h3>
      <div>
        Filtres - Tier par : date / titre original / titre français - Aller à :
        décénnie / lettre
      </div>
      <button onClick={() => handleTest()}>Test</button>
      <div ref={containerRef} className={moviesContainer}>
        <div className={moviesContent}>
          {movieList.map((movie) => (
            <Link
              key={movie._id}
              to="/movie/$movieId"
              params={{ movieId: movie._id }}
            >
              <div className={movieTile}>
                <img
                  src={'http://localhost:5000/media/posters/' + movie.picture}
                  alt={movie.originalTitle}
                  width={100}
                />
                {movie.originalTitle} -{' '}
                {format(new Date(movie.releaseDate), 'yyyy')}
              </div>
            </Link>
          ))}
          <div ref={loaderRef} className={loaderRefStyle}></div>
        </div>
      </div>
      {isFetching && <div>Loading...</div>}
    </div>
  );
}
