import { Link, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import AuthProvider from '../AuthProvider';
import UserInfos from '../AuthProvider/UserInfos';

export default function RootTemplate() {
  return (
    <>
      <nav>
        <Link to="/" search={{ page: 1 }}>
          Home
        </Link>{' '}
        <Link to="/movie/$movieId" params={{ movieId: '1234' }}>
          Movie
        </Link>{' '}
        <Link to="/statistics/genre">Stats</Link>
      </nav>
      <AuthProvider>
        <UserInfos />
      </AuthProvider>
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
