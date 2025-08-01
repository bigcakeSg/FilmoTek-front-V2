import { useLogin, useMe } from '@/hooks/auth.hooks';
import useUserStore from '@/stores/user.store';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LoginFormProps {
  onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: Readonly<LoginFormProps>) {
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const { setUser } = useUserStore();

  const {
    refetch: fetchLogin,
    isSuccess: isLoginSuccess,
    isFetching: isLoginFetching,
    error: loginError
  } = useLogin({
    username,
    password,
    rememberMe
  });

  const {
    refetch: fetchMe,
    isSuccess: isMeSuccess,
    data: user,
    isFetching: isMeFetching,
    error: meError
  } = useMe();

  useEffect(() => {
    const refetch = async () => {
      await fetchMe();
      setUser(user || null);
      if (onSuccess && isMeSuccess) {
        onSuccess();
      }
    };
    if (!isLoginFetching && isLoginSuccess) refetch();
  }, [isLoginFetching, isLoginSuccess, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetchLogin();
  };

  if (isLoginFetching || isMeFetching) return <div>{t('loading')}</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">{t('user.username')}</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">{t('user.password')}</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center">
        <input
          id="rememberMe"
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="rememberMe">{t('user.rememberMe')}</label>
      </div>
      {(meError || loginError) && <div>{t('user.unknownUser')}</div>}
      <button type="submit">{t('user.login')}</button>
    </form>
  );
}
