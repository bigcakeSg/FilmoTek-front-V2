import { z } from 'zod';
import { Movie } from '@/interfaces/movies.interfaces';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ButtonComponent from '../ui/ButtonComponent';
import TextfieldComponent from '../ui/TextfieldComponent';
import { useTranslation } from 'react-i18next';

const formEditMovieSchema = z.object({
  originalTitle: z.string().min(1, {
    message: 'Champ obligatoire' // TODO: texte d'erreur
  }),
  frenchTitle: z.string().optional(),
  englishTitle: z.string().optional(),
  picture: z
    // .url({
    .string()
    .min(1, {
      message: 'Veuillez entrer une URL valide' // TODO: texte d'erreur
    })
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
  })
});

type FormEditMovie = z.infer<typeof formEditMovieSchema>;

interface EditMovieProps {
  movieData: Movie | undefined;
}

export default function EditMovie({ movieData }: Readonly<EditMovieProps>) {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    watch,
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
      plot: movieData?.plot || ''
    }
  });

  const handleSubmitEditMovie: SubmitHandler<FormEditMovie> = async (
    data: FormEditMovie
  ) => {
    console.log('Editing movie with data:', data);
    // TODO: Implement the edit movie logic
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitEditMovie)}>
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
      <ButtonComponent label="Valider" type="submit" />
    </form>
  );
}
