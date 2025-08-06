import { FaEye, FaMapPin, FaStar } from 'react-icons/fa6';
import {
  movieCollectionTools,
  toolButton
} from './movieCollectionTools.styles';
import TooltipComponent from '@/components/ui/TooltipComponent';
import { useTranslation } from 'react-i18next';

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
  return (
    <TooltipComponent message={tooltipMessage}>
      <div
        role="button"
        tabIndex={0}
        className={toolButton({ status: isActive ? 'active' : 'inactive' })}
        aria-pressed={isActive}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
      >
        {icon}
      </div>
    </TooltipComponent>
  );
}

interface MovieCollectionToolsProps {
  watched?: boolean;
  favorite?: boolean;
  pinned?: boolean;
}

export default function MovieCollectionTools({
  watched,
  favorite,
  pinned
}: Readonly<MovieCollectionToolsProps>) {
  const { t } = useTranslation();

  const handleClickWatched = (): void => {
    console.log('WATCHED CLICKED');
  };

  const handleClickFavorite = (): void => {
    console.log('FAVORITE CLICKED');
  };

  const handleClickPinned = (): void => {
    console.log('PINNED CLICKED');
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
