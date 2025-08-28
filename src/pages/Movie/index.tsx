import { useTranslation } from 'react-i18next';
import { Route } from '@routes/movie.$movieId.index';
import MovieDetail from '@components/MovieDetail';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import IconButton from '@components/ui/IconButton';
import {
  buttonsContainer,
  loaderContainer,
  movieContainer,
  movieDeleteButtons,
  movieDeleteModal,
  movieDeleteModalTitle
} from './Movie.styles';
import { useDeleteMovie, useGetMovieDetail } from '@hooks/movies.hook';
import { useNavigate } from '@tanstack/react-router';
import { useRole } from '@hooks/auth.hook';
import Loader from '@/components/ui/Loader';
import useUiStore from '@/stores/ui.store';
import ButtonComponent from '@/components/ui/ButtonComponent';
import { Movie } from '@/interfaces/movies.interfaces';

interface DeleteMovieContentProps {
  movie: Movie;
  onDeleteMovie: () => void;
}

const DeleteMovieContent = ({
  movie,
  onDeleteMovie
}: Readonly<DeleteMovieContentProps>) => {
  const { closeModal } = useUiStore();
  const { t } = useTranslation();

  return (
    <div className={movieDeleteModal}>
      <div>{t('delete.sure', { movie: movie.originalTitle })}</div>
      <div className={movieDeleteButtons}>
        <ButtonComponent
          label={t('cancel')}
          version="secondary"
          onClick={closeModal}
        />
        <ButtonComponent label={t('delete.confirm')} onClick={onDeleteMovie} />
      </div>
    </div>
  );
};

export default function Movie() {
  const { t } = useTranslation();
  const navigate = useNavigate({ from: '/movie/$movieId/edit' });
  const { movieId } = Route.useParams();
  const { data, isFetching } = useGetMovieDetail(movieId);
  const { mutate: deleteMovie, isPending } = useDeleteMovie(movieId);
  const { isAdmin } = useRole();
  const { openModal, closeModal } = useUiStore();

  const handleDeleteMovie = () => {
    closeModal();
    deleteMovie();
  };

  const handleOpenDeleteMovieModal = () => {
    if (data)
      openModal({
        title: (
          <div className={movieDeleteModalTitle}>
            <MdDeleteForever />
            {t('delete.movie')}
          </div>
        ),
        content: (
          <DeleteMovieContent movie={data} onDeleteMovie={handleDeleteMovie} />
        )
      });
  };

  if (isFetching || isPending)
    return (
      <div className={loaderContainer}>
        <Loader label={t('loading')} />
      </div>
    );

  return (
    <div className={movieContainer}>
      {isAdmin && (
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
            onClick={handleOpenDeleteMovieModal}
            tooltip={t('delete.movie')}
          />
        </div>
      )}
      <MovieDetail movieData={data} />
    </div>
  );
}
