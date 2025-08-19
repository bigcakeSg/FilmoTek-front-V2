import { useState } from 'react';
import MovieDetail from '@components/MovieDetail';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import IconButton from '@/components/ui/IconButton';
import { buttonsContainer, movieContainer } from './Movie.styles';
import { useTranslation } from 'react-i18next';
import EditMovie from '@/components/EditMovie';

export default function Movie() {
  const { t } = useTranslation();
  const [isEditMode, setIsEditMode] = useState(false);

  if (isEditMode) return <EditMovie />;

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
      <MovieDetail />
    </div>
  );
}
