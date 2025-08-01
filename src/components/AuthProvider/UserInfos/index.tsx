import useUserStore from '@/stores/user.store';
import {
  clearAllAuthData,
  clearRememberMePreference
} from '@/utils/storage.utils';
import { clearAuthTokens } from 'axios-jwt';
import { useShallow } from 'zustand/react/shallow';

export default function UserInfos() {
  const { clearUser } = useUserStore();

  const user = useUserStore(useShallow((state) => state.user));

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();

    clearUser();

    clearRememberMePreference();
    clearAllAuthData();
    clearAuthTokens();
  };

  return (
    <div>
      <div>
        Bonjour {user?.firstname} {user?.lastname}!
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
