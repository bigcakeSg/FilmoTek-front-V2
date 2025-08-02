import { useEffect, useRef, useState } from 'react';
// import { Route } from '@/routes';
// import { Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import { useGetMovieList } from '@/hooks/movies.hooks';
import { axiosInstance } from '@/config/axiosInstance';

export default function Movies() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const { data: moviesData, fetchNextPage, isFetching } = useGetMovieList();
  const [distanceFromBottom, setDistanceFromBottom] = useState(0);
  // const { page = 1 } = Route.useSearch();

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
    fetchNextPage();
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
      <button onClick={() => handleTest()}>Test</button>
      <div>
        {movieList.map((movie) => (
          <div key={movie._id}>
            <img
              src={'http://localhost:5000/media/posters/' + movie.picture}
              alt={movie.originalTitle}
              width={50}
            />
            {movie.originalTitle} -{' '}
            {format(new Date(movie.releaseDate), 'yyyy')}
          </div>
        ))}
      </div>
      <div ref={loaderRef}></div>
    </div>
  );
}
