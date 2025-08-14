import { loginButton } from './buttonComponent.styles';

interface ButtonComponentProps {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  version?: 'principal' | 'secondary';
  onClick?: (e: React.FormEvent) => void;
}

export default function ButtonComponent({
  label,
  type,
  version = 'principal',
  onClick
}: Readonly<ButtonComponentProps>) {
  return (
    <button
      className={loginButton({ type: version })}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}
