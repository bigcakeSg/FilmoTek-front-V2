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
        <div
          role="button"
          tabIndex={0}
          className={iconButton}
          onClick={onClick}
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

  return (
    <div
      role="button"
      tabIndex={0}
      className={iconButton}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {icon}
    </div>
  );
}
