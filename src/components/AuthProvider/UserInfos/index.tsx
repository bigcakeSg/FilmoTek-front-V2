import useUserStore from '@/stores/user.store';
import {
  clearAllAuthData,
  clearRememberMePreference
} from '@/utils/storage.utils';
import { useQueryClient } from '@tanstack/react-query';
import { clearAuthTokens } from 'axios-jwt';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';

export default function UserInfos() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { clearUser } = useUserStore();

  const user = useUserStore(useShallow((state) => state.user));

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Logging out user:', user?.username);
    queryClient.removeQueries({ queryKey: ['login'] });
    queryClient.removeQueries({ queryKey: ['user'] });
    clearRememberMePreference();
    clearAllAuthData();
    clearAuthTokens();
    clearUser();
  };

  return (
    <div>
      <div>
        {user?.firstname} {user?.lastname}
      </div>
      {/* <button onClick={handelTest}>CLICK</button> */}
      <button onClick={handleLogout}>{t('user.logout')}</button>
    </div>
  );
}
