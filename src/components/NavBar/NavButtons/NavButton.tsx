import { Link } from '@tanstack/react-router';
import TooltipComponent from '@components/ui/TooltipComponent';
import { navButton, navButtonLabel } from './navButtons.sttyles';

interface NavButtonProps {
  to?: string;
  searchParams?: Record<string, unknown>;
  label: string;
  icon: React.ReactNode;
  tootltipMessage: string | React.ReactNode;
}

export default function NavButton({
  to,
  searchParams = {},
  label,
  icon,
  tootltipMessage
}: Readonly<NavButtonProps>) {
  if (to)
    return (
      <TooltipComponent message={tootltipMessage}>
        <Link to={to} search={searchParams}>
          <div className={navButton}>
            <div>{icon}</div>
            <div className={navButtonLabel}>{label.toUpperCase()}</div>
          </div>
        </Link>
      </TooltipComponent>
    );

  return (
    <TooltipComponent message={tootltipMessage}>
      <div className={navButton}>
        <div>{icon}</div>
        <div className={navButtonLabel}>{label.toUpperCase()}</div>
      </div>
    </TooltipComponent>
  );
}
