import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMovieFromApi } from '@hooks/movies.hook';
import {
  alertMovieApiError,
  buttonMovieApiForm,
  loaderContainer,
  movieApiForm
} from './addMovie.styles';
import TextfieldComponent from '@components/ui/TextfieldComponent';
import ButtonComponent from '@components/ui/ButtonComponent';
import { GoAlertFill } from 'react-icons/go';
import useUiStore from '@stores/ui.store';
import Loader from '../ui/Loader';
import { toaster } from '../ui/ToasterComponent/toaster';

const formAddMovieSchema = z.object({
  imdbId: z.string().min(1, {
    message: 'addMovie.imdbIdError'
  })
});

type FormAddMovie = z.infer<typeof formAddMovieSchema>;

export default function AddMovie() {
  const { t } = useTranslation();
  const navigate = useNavigate({ from: '/movie/$movieId/edit' });
  const { closeModal } = useUiStore();

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
    const { data, error } = await fetchMovieApi();
    console.log('movieApiError', error);
    if (error?.status === 500) {
      toaster.error({
        title: t('toaster.error.title'),
        description: t('toaster.error.unknown', { id: watch('imdbId') }),
        duration: Infinity
      });
    }

    if (error?.status === 409) {
      toaster.warning({
        title: t('toaster.warning.title'),
        description: t('toaster.warning.alreadyExists', {
          id: watch('imdbId')
        })
      });
    }

    if (data?.imdbId) {
      closeModal();
      navigate({
        to: '/movie/$movieId/edit',
        params: { movieId: data.imdbId },
        search: { type: 'create' }
      });
    }
  };

  const loading = isMovieApiFetching;

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSubmitMovieId)}
        className={`${movieApiForm}${loading ? ' loading' : ''}`}
      >
        {movieApiError?.status === 500 && (
          <div className={alertMovieApiError}>
            <GoAlertFill />
            {t('addMovie.unknownImdbId')}
          </div>
        )}
        <div>
          <Controller
            name="imdbId"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <TextfieldComponent
                  label={t('addMovie.imdbId')}
                  required
                  errorText={
                    errors.imdbId?.message && t(errors.imdbId?.message)
                  }
                  {...field}
                />
              );
            }}
          />
          <div className={buttonMovieApiForm}>
            <ButtonComponent
              disabled={!watch('imdbId')}
              label={t('addMovie.search')}
              type="submit"
            />
          </div>
        </div>
      </form>
      {loading && (
        <div className={loaderContainer}>
          <Loader label={t('loading')} />
        </div>
      )}
    </>
  );
}
