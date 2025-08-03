import { useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { useGetMovieList } from '@/hooks/movies.hooks';
import { axiosInstance } from '@/config/axiosInstance';
import { Link } from '@tanstack/react-router';

export default function Movies() {
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
      { threshold: 0.1 }
    );
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef]);

  const movieList = moviesData?.pages.flatMap((page) => page.data) || [];

  return (
    <div>
      <h3>Liste de films</h3>
      <div>
        Filtres - Tier par : date / titre original / titre français - Aller à :
        décénnie / lettre
      </div>
      <button onClick={() => handleTest()}>Test</button>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative'
        }}
      >
        {movieList.map((movie) => (
          <Link
            key={movie._id}
            to="/movie/$movieId"
            params={{ movieId: movie._id }}
          >
            <div
              style={{
                margin: '20px',
                width: '200px',
                height: '300px'
              }}
            >
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
        <div
          ref={loaderRef}
          style={{
            height: '1000px',
            width: '100px',
            background: 'transparent',
            position: 'absolute',
            bottom: '0',
            zIndex: -1
          }}
        ></div>
      </div>
      {isFetching && <div>Loading...</div>}
    </div>
  );
}
