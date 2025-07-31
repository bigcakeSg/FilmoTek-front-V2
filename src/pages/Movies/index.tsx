import { login, logout } from '@/api/login.api';
import { axiosInstance } from '@/config/axiosInstance';
import { useMovies } from '@/hooks/movies.hooks';
import { Route } from '@/routes';
import { Link } from '@tanstack/react-router';
import { getAccessToken, getRefreshToken } from 'axios-jwt';
import { useTranslation } from 'react-i18next';

export default function Movies() {
  const moviesQuery = useMovies();
  const { page = 1 } = Route.useSearch();
  const { t } = useTranslation();

  const handleTest = async () => {
    const response = await axiosInstance.get('/auth/me');
    console.log(response.data);
  };

  return (
    <div>
      <h3>
        {t('movieList')} - page {page}
      </h3>
      <div>
        <button
          onClick={() => login({ username: 'bigcake', password: '1234' })}
        >
          Login
        </button>
        <button
          onClick={async () => {
            const accessToken = await getAccessToken();
            const refreshToken = await getRefreshToken();
            console.log('Access Token:', accessToken);
            console.log('Refresh Token:', refreshToken);
          }}
        >
          Console JWT
        </button>
        <button onClick={() => handleTest()}>Test</button>
        <button onClick={() => logout()}>Logout</button>
      </div>
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
