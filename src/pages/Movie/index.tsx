import { Route } from '@/routes/movie.$movieId.index';
import MovieDetail from '@components/MovieDetail';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import IconButton from '@/components/ui/IconButton';
import { buttonsContainer, movieContainer } from './Movie.styles';
import { useTranslation } from 'react-i18next';
import { useGetMovieDetail } from '@/hooks/movies.hook';
import { useNavigate } from '@tanstack/react-router';

export default function Movie() {
  const { t } = useTranslation();
  const navigate = useNavigate({ from: '/movie/$movieId/edit' });
  const { movieId } = Route.useParams();
  const { data, isFetching } = useGetMovieDetail(movieId);

  return (
    <div className={movieContainer}>
      <div className={buttonsContainer}>
        <IconButton
          icon={<MdEdit />}
          onClick={() =>
            navigate({
              to: '/movie/$movieId/edit',
              params: { movieId },
              search: { type: 'update' }
            })
          }
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
