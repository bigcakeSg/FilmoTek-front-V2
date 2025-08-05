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
      <button
        className={toolButton({ status: isActive ? 'active' : 'inactive' })}
        onClick={onClick}
      >
        {icon}
      </button>
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

  return (
    <div>
      <div className={movieCollectionTools}>
        <ToolButton
          icon={<FaEye size={18} />}
          isActive={!!watched}
          tooltipMessage={
            watched ? t('tileTooltip.watched') : t('tileTooltip.notWatched')
          }
          onClick={() => null}
        />
        <ToolButton
          icon={<FaMapPin size={18} />}
          isActive={!!favorite}
          tooltipMessage={
            favorite ? t('tileTooltip.favorite') : t('tileTooltip.notFavorite')
          }
          onClick={() => null}
        />
        <ToolButton
          icon={<FaStar size={18} />}
          isActive={!!pinned}
          tooltipMessage={
            pinned ? t('tileTooltip.pinned') : t('tileTooltip.notPinned')
          }
          onClick={() => null}
        />
      </div>
    </div>
  );
}
