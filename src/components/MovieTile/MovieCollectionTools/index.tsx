import { useTranslation } from 'react-i18next';
import { FaEye, FaMapPin, FaStar } from 'react-icons/fa6';
import {
  movieCollectionTools,
  toolButton
} from './movieCollectionTools.styles';
import TooltipComponent from '@components/ui/TooltipComponent';
import { useCollections } from '@hooks/collections.hook';
import { usePatchMovie } from '@hooks/movies.hook';
import { useRole } from '@hooks/auth.hook';

interface ToolButtonProps {
  icon: React.ReactNode;
  isActive: boolean;
  tooltipMessage: string | React.ReactNode;
  onClick: () => void;
}

function ToolButton({
  icon,
  isActive,
  tooltipMessage,
  onClick
}: Readonly<ToolButtonProps>) {
  const { isAdmin } = useRole();

  return (
    <TooltipComponent message={tooltipMessage}>
      <div
        role="button"
        tabIndex={0}
        className={toolButton({
          status: isActive ? 'active' : 'inactive',
          role: isAdmin ? 'admin' : 'user'
        })}
        aria-pressed={isActive}
        onClick={(e) => {
          if (isAdmin) {
            e.preventDefault();
            onClick();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (isAdmin) {
              e.preventDefault();
              onClick();
            }
          }
        }}
      >
        {icon}
      </div>
    </TooltipComponent>
  );
}

interface MovieCollectionToolsProps {
  movieId: string;
  watched?: boolean;
  favorite?: boolean;
  pinned?: boolean;
}

export default function MovieCollectionTools({
  movieId,
  watched,
  favorite,
  pinned
}: Readonly<MovieCollectionToolsProps>) {
  const { t } = useTranslation();
  const { data: collections } = useCollections();
  const { mutate } = usePatchMovie();

  const watchedId = collections.find(
    (c) => c.name === 'collection.watched'
  )?._id;

  const pinnedId = collections.find((c) => c.name === 'collection.pinned')?._id;

  const favoriteId = collections.find(
    (c) => c.name === 'collection.favorite'
  )?._id;

  const handleClickWatched = (): void => {
    const movieCollections: string[] = [];
    if (!watched && watchedId !== undefined) movieCollections.push(watchedId);
    if (pinned && pinnedId !== undefined) movieCollections.push(pinnedId);
    if (favorite && favoriteId !== undefined) movieCollections.push(favoriteId);

    mutate({ movieId, movieData: { collections: movieCollections } });
  };

  const handleClickFavorite = (): void => {
    const movieCollections: string[] = [];
    if (watched && watchedId !== undefined) movieCollections.push(watchedId);
    if (pinned && pinnedId !== undefined) movieCollections.push(pinnedId);
    if (!favorite && favoriteId !== undefined)
      movieCollections.push(favoriteId);

    mutate({ movieId, movieData: { collections: movieCollections } });
  };

  const handleClickPinned = (): void => {
    const movieCollections: string[] = [];
    if (watched && watchedId !== undefined) movieCollections.push(watchedId);
    if (!pinned && pinnedId !== undefined) movieCollections.push(pinnedId);
    if (favorite && favoriteId !== undefined) movieCollections.push(favoriteId);

    mutate({ movieId, movieData: { collections: movieCollections } });
  };

  return (
    <div>
      <div className={movieCollectionTools}>
        <ToolButton
          icon={<FaEye size={18} />}
          isActive={!!watched}
          tooltipMessage={
            watched ? t('tileTooltip.watched') : t('tileTooltip.notWatched')
          }
          onClick={handleClickWatched}
        />
        <ToolButton
          icon={<FaMapPin size={18} />}
          isActive={!!pinned}
          tooltipMessage={
            pinned ? t('tileTooltip.pinned') : t('tileTooltip.notPinned')
          }
          onClick={handleClickPinned}
        />
        <ToolButton
          icon={<FaStar size={18} />}
          isActive={!!favorite}
          tooltipMessage={
            favorite ? t('tileTooltip.favorite') : t('tileTooltip.notFavorite')
          }
          onClick={handleClickFavorite}
        />
      </div>
    </div>
  );
}
