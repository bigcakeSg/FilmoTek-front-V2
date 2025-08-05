import { FaEye, FaMapPin, FaStar } from 'react-icons/fa6';
import {
  movieCollectionTools,
  toolButton
} from './movieCollectionTools.styles';

function ToolButton({
  icon,
  isActive,
  onClick
}: {
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={toolButton({ status: isActive ? 'active' : 'inactive' })}
      onClick={onClick}
    >
      {icon}
    </button>
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
  return (
    <div>
      <div className={movieCollectionTools}>
        <ToolButton
          icon={<FaEye size={16} />}
          isActive={!!watched}
          onClick={() => null}
        />
        <ToolButton
          icon={<FaMapPin size={16} />}
          isActive={!!favorite}
          onClick={() => null}
        />
        <ToolButton
          icon={<FaStar size={16} />}
          isActive={!!pinned}
          onClick={() => null}
        />
      </div>
    </div>
  );
}
