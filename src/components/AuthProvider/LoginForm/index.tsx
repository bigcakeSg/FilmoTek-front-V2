import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLogin, useMe } from '@/hooks/auth.hook';
import useUserStore from '@/stores/user.store';
import TextfieldComponent from '@/components/ui/TextfieldComponent';
import {
  alertUserError,
  loadingUser,
  loginForm,
  loginFormContent
} from './loginForm.styles';
import CheckboxComponent from '@/components/ui/checkboxComponent';
import { GoAlertFill } from 'react-icons/go';
import ButtonComponent from '@/components/ui/ButtonComponent';

const formLoginSchema = z.object({
  username: z.string().min(3, {
    message: 'user.userNameError'
  }),
  password: z.string().min(4, {
    message: 'user.passwordError'
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

      if (onSuccess && isMeSuccess) {
        onSuccess();
      }
    };

    if (!isLoginFetching && isLoginSuccess && !user) refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoginFetching, isLoginSuccess, user]);

  useEffect(() => {
    setUser(user || null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSubmitLogin: SubmitHandler<FormLogin> = async () => {
    await fetchLogin();
  };

  const loading = isLoginFetching || isMeFetching;

  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)} className={loginForm}>
      {(meError || loginError) && (
        <div className={alertUserError}>
          <GoAlertFill />
          {t('user.unknownUser')}
        </div>
      )}
      <div className={`${loginFormContent}${loading ? ' loading' : ''}`}>
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <TextfieldComponent
                label={t('user.username')}
                required
                errorText={
                  errors.username?.message && t(errors.username?.message)
                }
                {...field}
              />
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <TextfieldComponent
                label={t('user.password')}
                required
                errorText={
                  errors.password?.message && t(errors.password?.message)
                }
                type="password"
                {...field}
              />
            );
          }}
        />
        <div className="flex items-center">
          <Controller
            name="rememberMe"
            control={control}
            render={({ field }) => {
              return (
                <CheckboxComponent
                  label={t('user.rememberMe')}
                  checked={!!field.value}
                  onChange={(checked) => field.onChange(checked)}
                />
              );
            }}
          />
        </div>
        <ButtonComponent
          label={t('user.login')}
          type="submit"
          version="secondary"
        />
      </div>
      {loading && (
        <div className={loadingUser}>
          {/* TODO: loader */}
          <div>{t('loading')}</div>
        </div>
      )}
    </form>
  );
}
