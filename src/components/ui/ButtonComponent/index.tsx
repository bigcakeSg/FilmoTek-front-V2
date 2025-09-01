import { loginButton } from './buttonComponent.styles';

interface ButtonComponentProps {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  version?: 'primary' | 'secondary';
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
}

export default function ButtonComponent({
  label,
  type,
  version = 'primary',
  onClick,
  disabled
}: Readonly<ButtonComponentProps>) {
  return (
    <button
      className={loginButton({ type: version })}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
}
