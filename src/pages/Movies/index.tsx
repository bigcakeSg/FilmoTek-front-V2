import { useRef } from 'react';
import { Route } from '@/routes';
import { Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import { useGetMovieList } from '@/hooks/movies.hooks';
import { axiosInstance } from '@/config/axiosInstance';

export default function Movies() {
  const { data: moviesData, fetchNextPage, hasNextPage } = useGetMovieList();
  const { page = 1 } = Route.useSearch();
  const loaderRef = useRef(null);

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
  console.log('hasNextPage', hasNextPage);
  return (
    <div>
      <h3>Liste de films - page {page}</h3>
      <button onClick={() => handleTest()}>Test</button>
      <Link to="/" search={{ page: page + 1 }}>
        Next
      </Link>
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
      <button ref={loaderRef} onClick={() => fetchNextPage()}>
        Films suivants
      </button>
    </div>
  );
}
