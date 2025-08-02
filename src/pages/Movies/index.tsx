import { Route } from '@/routes';
import { Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import { useMovies } from '@/hooks/movies.hooks';
import { axiosInstance } from '@/config/axiosInstance';

export default function Movies() {
  const moviesQuery = useMovies();
  const { page = 1 } = Route.useSearch();

  const handleTest = async () => {
    try {
      const response = await axiosInstance.get('/auth/me');
      alert(`Hello ${response.data.firstname} ${response.data.lastname}`);
    } catch (error) {
      console.log('Error fetching user data:', error);
      alert('Error fetching user data');
    }
  };

  return (
    <div>
      <h3>Liste de films - page {page}</h3>
      <button onClick={() => handleTest()}>Test</button>
      <Link to="/" search={{ page: page + 1 }}>
        Next
      </Link>
      <div>
        {moviesQuery.data.map((movie) => (
          <div key={movie._id}>
            {/* <img
              src={'http://localhost:5000/media/' + movie.picture}
              alt={movie.originalTitle}
              width={50}
            /> */}
            {movie.originalTitle} -{' '}
            {format(new Date(movie.releaseDate), 'yyyy')}
          </div>
        ))}
      </div>
    </div>
  );
}
