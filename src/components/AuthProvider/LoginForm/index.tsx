import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLogin, useMe } from '@/hooks/auth.hooks';
import useUserStore from '@/stores/user.store';

const formLoginSchema = z.object({
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters.' // TODO: translation
  }),
  password: z.string().min(4, {
    message: 'Password must be at least 4 characters.' // TODO: translation
  }),
  rememberMe: z.boolean().optional()
});

type FormLogin = z.infer<typeof formLoginSchema>;

interface LoginFormProps {
  onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: Readonly<LoginFormProps>) {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormLogin>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false
    }
  });

  const { setUser } = useUserStore();

  const {
    refetch: fetchLogin,
    isSuccess: isLoginSuccess,
    isFetching: isLoginFetching,
    error: loginError
  } = useLogin(watch());

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

  const handleSubmitLogin: SubmitHandler<FormLogin> = async () => {
    await fetchLogin();
  };

  if (isLoginFetching || isMeFetching) return <div>{t('loading')}</div>;

  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)}>
      <div>
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <>
                <label htmlFor="username">{t('user.username')}</label>
                <input {...field} id="username" type="text" required />
                <div>
                  {errors.username && <span>{errors.username.message}</span>}
                </div>
              </>
            );
          }}
        />
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <>
                <label htmlFor="password">{t('user.password')}</label>
                <input {...field} id="password" type="password" required />
                <div>
                  {errors.password && <span>{errors.password.message}</span>}
                </div>
              </>
            );
          }}
        />
      </div>
      <div className="flex items-center">
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => {
            return (
              <>
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
                <label htmlFor="rememberMe">{t('user.rememberMe')}</label>
              </>
            );
          }}
        />
      </div>
      {(meError || loginError) && <div>{t('user.unknownUser')}</div>}
      <button type="submit">{t('user.login')}</button>
    </form>
  );
}
