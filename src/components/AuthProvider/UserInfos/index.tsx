import { useAuth } from '@/hooks/auth.hooks';
import useUserStore from '@/stores/user.store';
import { useShallow } from 'zustand/react/shallow';

export default function UserInfos() {
  const { logout } = useAuth();
  const { clearUser } = useUserStore();

  const user = useUserStore(useShallow((state) => state.user));

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();

    clearUser();
    await logout();
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
