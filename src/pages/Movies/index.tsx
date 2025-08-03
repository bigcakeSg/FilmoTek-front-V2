import { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { useGetMovieList } from '@/hooks/movies.hooks';
import { axiosInstance } from '@/config/axiosInstance';
import { Link } from '@tanstack/react-router';

export default function Movies() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const { data: moviesData, fetchNextPage, isFetching } = useGetMovieList();
  const [distanceFromBottom, setDistanceFromBottom] = useState(0);

  const calculateDistanceFromBottom = () => {
    if (loaderRef.current) {
      const rect = loaderRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const distance = windowHeight - rect.bottom;
      setDistanceFromBottom(distance);
      return distance;
    }
    return 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateDistanceFromBottom);
    window.addEventListener('resize', calculateDistanceFromBottom);
    calculateDistanceFromBottom();

    return () => {
      window.removeEventListener('scroll', calculateDistanceFromBottom);
      window.addEventListener('resize', calculateDistanceFromBottom);
    };
  }, []);

  if (distanceFromBottom > -500 && distanceFromBottom < 100 && !isFetching) {
    // fetchNextPage(); // FIXME: ne pas fetch next à l'ouverture de la page
  }

  const handleTest = async () => {
    try {
      const response = await axiosInstance.get('/auth/me');
      alert(`Hello ${response.data.firstname} ${response.data.lastname}`);
    } catch (error) {
      console.log('Error fetching user data:', error);
      alert('Error fetching user data');
    }
  };

  const movieList = moviesData?.pages.flatMap((page) => page.data) || [];

  return (
    <div>
      <h3>Liste de films</h3>
      <div>
        Filtres - Tier par : date / titre original / titre français - Aller à :
        décénnie / lettre
      </div>
      <button onClick={() => handleTest()}>Test</button>
      <div>
        {movieList.map((movie) => (
          <Link
            key={movie._id}
            to="/movie/$movieId"
            params={{ movieId: movie._id }}
          >
            <img
              src={'http://localhost:5000/media/posters/' + movie.picture}
              alt={movie.originalTitle}
              width={100}
            />
            {movie.originalTitle} -{' '}
            {format(new Date(movie.releaseDate), 'yyyy')}
          </Link>
        ))}
      </div>
      <div ref={loaderRef}></div>
    </div>
  );
}
