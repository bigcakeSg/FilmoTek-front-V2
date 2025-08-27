import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Movie } from '@interfaces/movies.interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import ButtonComponent from '@components/ui/ButtonComponent';
import TextfieldComponent from '@components/ui/TextfieldComponent';
import {
  useGetMovieDetail,
  useMovieFromApi,
  usePatchMovie,
  usePostMovie
} from '@/hooks/movies.hook';
import { formContainer } from './editMovieForm.styles';

const formEditMovieSchema = z.object({
  originalTitle: z.string().min(1, {
    message: 'Champ obligatoire' // TODO: texte d'erreur
  }),
  frenchTitle: z.string().optional(),
  englishTitle: z.string().optional(),
  picture: z
    // .url({
    .string()
    // .min(1, {
    //   message: 'Veuillez entrer une URL valide' // TODO: texte d'erreur
    // })
    .min(1, {
      message: 'Champ obligatoire' // TODO: texte d'erreur
    }),
  releaseDate: z
    .string()
    .min(1, {
      message: 'Champ obligatoire' // TODO: texte d'erreur
    })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'Veuillez entrer une date valide' // TODO: texte d'erreur
    }),
  duration: z.number().min(1, {
    message: 'Champ obligatoire' // TODO: texte d'erreur
  }),
  plot: z.string().min(1, {
    message: 'Champ obligatoire' // TODO: texte d'erreur
  }),
  videos: z.array(z.string()).optional()
});

type FormEditMovie = z.infer<typeof formEditMovieSchema>;

interface EditMovieProps {
  movieId: string;
  type?: 'create' | 'update';
}

export default function EditMovieForm({
  movieId,
  type
}: Readonly<EditMovieProps>) {
  const { t } = useTranslation();

  const {
    data: movieUpdateData
    // isFetching: isMovieUpdateDataFetching
  } = useGetMovieDetail(type === 'update' ? movieId : undefined);

  const {
    data: movieApiData,
    // isFetching: isMovieDataApiFetching,
    refetch
  } = useMovieFromApi(type === 'create' ? movieId : undefined);

  const { mutate: createMovie } = usePostMovie();
  const { mutate: updateMovie } = usePatchMovie();

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const movieData: Movie | undefined =
    type === 'update' ? movieUpdateData : movieApiData;

  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors }
  } = useForm<FormEditMovie>({
    resolver: zodResolver(formEditMovieSchema),
    defaultValues: {
      originalTitle: movieData?.originalTitle || '',
      frenchTitle: movieData?.frenchTitle || '',
      englishTitle: movieData?.englishTitle || '',
      picture: movieData?.picture || '',
      releaseDate: movieData?.releaseDate || '',
      duration: movieData?.duration || 0,
      plot: movieData?.plot || '',
      videos: movieData?.videos || []
    }
  });

  const handleSubmitEditMovie: SubmitHandler<FormEditMovie> = async (
    data: FormEditMovie
  ) => {
    if (type === 'create' && movieData) {
      createMovie({ ...movieData, ...data });
    }

    if (type === 'update') {
      updateMovie({
        movieId,
        movieData: { ...movieData, ...data },
        redirect: true
      });
    }
  };

  return (
    <form
      className={formContainer}
      onSubmit={handleSubmit(handleSubmitEditMovie)}
    >
      <div>{movieData?.imdbId}</div>
      <Controller
        name="originalTitle"
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <TextfieldComponent
              label={t('movie.originalTitle')}
              required
              errorText={
                errors.originalTitle?.message &&
                t(errors.originalTitle?.message)
              }
              {...field}
            />
          );
        }}
      />
      <Controller
        name="frenchTitle"
        control={control}
        render={({ field }) => {
          return (
            <TextfieldComponent label={t('movie.frenchTitle')} {...field} />
          );
        }}
      />
      <Controller
        name="englishTitle"
        control={control}
        render={({ field }) => {
          return (
            <TextfieldComponent label={t('movie.englishTitle')} {...field} />
          );
        }}
      />
      <Controller
        name="picture"
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <TextfieldComponent
              label={t('movie.picture')}
              required
              errorText={errors.picture?.message && t(errors.picture?.message)}
              {...field}
            />
          );
        }}
      />
      <Controller
        name="releaseDate"
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <TextfieldComponent
              label={t('movie.releaseDate')}
              required
              errorText={
                errors.releaseDate?.message && t(errors.releaseDate?.message)
              }
              {...field}
            />
          );
        }}
      />
      <Controller
        name="duration"
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <TextfieldComponent
              label={t('movie.duration')}
              required
              errorText={
                errors.duration?.message && t(errors.duration?.message)
              }
              {...field}
            />
          );
        }}
      />
      <Controller
        name="plot"
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <TextfieldComponent
              label={t('movie.plot')}
              required
              errorText={errors.plot?.message && t(errors.plot?.message)}
              {...field}
            />
          );
        }}
      />
      <Controller
        name="videos"
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <>
              <label>{t('movie.videos')}</label>
              <button
                type="button"
                onClick={() => {
                  const newVideos = ['', ...(field.value || [])];
                  field.onChange(newVideos);
                }}
              >
                (+)
              </button>
              {field.value?.map((video, index) => (
                <div key={`video-${index}`}>
                  <TextfieldComponent
                    required
                    errorText={
                      errors.videos?.[index]?.message &&
                      t(errors.videos?.[index]?.message)
                    }
                    value={video}
                    onChange={(value) => {
                      const newVideos = [...(field.value || [])];
                      newVideos[index] = value;
                      field.onChange(newVideos);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newVideos = [...(field.value || [])];
                      newVideos.splice(index, 1);
                      field.onChange(newVideos);
                    }}
                  >
                    (-)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const newVideos = [...(field.value || [])];
                      newVideos.splice(index + 1, 0, '');
                      field.onChange(newVideos);
                    }}
                  >
                    (+)
                  </button>
                </div>
              ))}
            </>
          );
        }}
      />
      <ButtonComponent label="Valider" type="submit" />
    </form>
  );
}
