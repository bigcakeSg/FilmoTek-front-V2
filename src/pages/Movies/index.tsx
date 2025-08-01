import { Route } from '@/routes';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useMovies } from '@/hooks/movies.hooks';
import { axiosInstance } from '@/config/axiosInstance';
import AuthProvider from '@/components/AuthProvider';
import UserInfos from '@/components/AuthProvider/UserInfos';

export default function Movies() {
  const moviesQuery = useMovies();
  const { page = 1 } = Route.useSearch();
  const { t } = useTranslation();

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
      <h3>
        {t('movieList')} - page {page}
      </h3>
      <button onClick={() => handleTest()}>Test</button>
      <AuthProvider>
        <UserInfos />
      </AuthProvider>

      <Link to="/" search={{ page: page + 1 }}>
        Next
      </Link>
      <div>
        {moviesQuery.data.map((movie) => (
          <div key={movie._id}>{movie.originalTitle}</div>
        ))}
      </div>
    </div>
  );
}
