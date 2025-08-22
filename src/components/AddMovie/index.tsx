import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMovieFromApi } from '@/hooks/movies.hook';
import {
  alertMovieApiError,
  loadingMovieApi,
  movieApiForm,
  movieApiFormContent
} from './addMovie.styles';
import TextfieldComponent from '@/components/ui/TextfieldComponent';
import ButtonComponent from '@/components/ui/ButtonComponent';
import { GoAlertFill } from 'react-icons/go';
import { useNavigate } from '@tanstack/react-router';

const formAddMovieSchema = z.object({
  imdbId: z.string().min(1, {
    message: 'addMovie.imdbIdError'
  })
});

type FormAddMovie = z.infer<typeof formAddMovieSchema>;

export default function AddMovie() {
  const { t } = useTranslation();
  const navigate = useNavigate({ from: '/movie/$movieId/edit' });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormAddMovie>({
    resolver: zodResolver(formAddMovieSchema),
    defaultValues: {
      imdbId: ''
    }
  });

  const {
    refetch: fetchMovieApi,
    isFetching: isMovieApiFetching,
    error: movieApiError
  } = useMovieFromApi(watch('imdbId'));

  const handleSubmitMovieId: SubmitHandler<FormAddMovie> = async () => {
    const { data } = await fetchMovieApi();

    if (data?.imdbId) {
      navigate({
        to: '/movie/$movieId/edit',
        params: { movieId: data.imdbId },
        search: { type: 'create' }
      });
    }
  };

  const loading = isMovieApiFetching;

  return (
    <form onSubmit={handleSubmit(handleSubmitMovieId)} className={movieApiForm}>
      {movieApiError && (
        <div className={alertMovieApiError}>
          <GoAlertFill />
          {t('addMovie.unknownImdbId')}
        </div>
      )}
      <div className={`${movieApiFormContent}${loading ? ' loading' : ''}`}>
        <Controller
          name="imdbId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <TextfieldComponent
                label={t('addMovie.imdbId')}
                required
                errorText={errors.imdbId?.message && t(errors.imdbId?.message)}
                {...field}
              />
            );
          }}
        />
        <ButtonComponent label={t('addMovie.search')} type="submit" />
      </div>
      {loading && (
        <div className={loadingMovieApi}>
          {/* TODO: loader */}
          <div>{t('loading')}</div>
        </div>
      )}
    </form>
  );
}
