import { Link } from '@tanstack/react-router';
import { navButton, navButtonLabel } from './navButton.styles';
import TooltipComponent from '@components/ui/TooltipComponent';

interface NavButtonProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  tootltipMessage: string | React.ReactNode;
}

export default function NavButton({
  to,
  label,
  icon,
  tootltipMessage
}: Readonly<NavButtonProps>) {
  return (
    <TooltipComponent message={tootltipMessage}>
      <Link to={to}>
        <div className={navButton}>
          <div>{icon}</div>
          <div className={navButtonLabel}>{label.toUpperCase()}</div>
        </div>
      </Link>
    </TooltipComponent>
  );
}
