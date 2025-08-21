import { useState } from 'react';
import { Route } from '@/routes/movie.$movieId.index';
import MovieDetail from '@components/MovieDetail';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import IconButton from '@/components/ui/IconButton';
import { buttonsContainer, movieContainer } from './Movie.styles';
import { useTranslation } from 'react-i18next';
import EditMovie from '@/components/EditMovie';
import { useGetMovieDetail } from '@/hooks/movies.hook';

export default function Movie() {
  const { t } = useTranslation();
  const { movieId } = Route.useParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const { data, isFetching } = useGetMovieDetail(movieId);

  if (isEditMode) return <EditMovie movieData={data} />;

  return (
    <div className={movieContainer}>
      <div className={buttonsContainer}>
        <IconButton
          icon={<MdEdit />}
          onClick={() => setIsEditMode(true)}
          tooltip={t('edition.editMovie')}
        />
        <IconButton
          icon={<MdDeleteForever />}
          onClick={() => {}}
          tooltip={t('edition.deleteMovie')}
        />
      </div>
      <MovieDetail movieData={data} isFetching={isFetching} />
    </div>
  );
}
