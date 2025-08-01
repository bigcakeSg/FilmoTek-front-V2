import { useLogin, useMe } from '@/hooks/auth.hooks';
import useUserStore from '@/stores/user.store';
import { useState } from 'react';

interface LoginFormProps {
  onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: Readonly<LoginFormProps>) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useUserStore();

  const { refetch: refetchMe } = useMe();
  const { refetch: refetchLogin } = useLogin({
    username,
    password,
    rememberMe
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      isSuccess: isLoginSuccess,
      isFetching: isLoginFetching,
      error: loginError
    } = await refetchLogin();
    setError(loginError);
    setIsLoading(isLoginFetching);

    if (isLoginSuccess) {
      const { data: user, isSuccess: isMeSuccess } = await refetchMe();
      if (isMeSuccess && user) {
        setUser(user);
      }
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nom d'utilisateur</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={isLoading}
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
      </div>
      <div className="flex items-center">
        <input
          id="rememberMe"
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          disabled={isLoading}
        />
        <label htmlFor="rememberMe">Rester connecté</label>
      </div>
      {error && <div>{error.message}</div>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Connexion...' : 'Se connecter'}
      </button>
    </form>
  );
}
