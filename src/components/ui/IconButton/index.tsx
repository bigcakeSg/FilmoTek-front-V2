import TooltipComponent from '../TooltipComponent';
import { iconButton } from './IconButton.styles';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  tooltip?: string;
}

export default function IconButton({
  icon,
  onClick,
  tooltip
}: Readonly<IconButtonProps>) {
  if (tooltip)
    return (
      <TooltipComponent message={tooltip}>
        <button className={iconButton} onClick={onClick}>
          {icon}
        </button>
      </TooltipComponent>
    );

  return (
    <button className={iconButton} onClick={onClick}>
      {icon}
    </button>
  );
}
