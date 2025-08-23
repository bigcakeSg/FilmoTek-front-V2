import { Field } from '@ark-ui/react/field';
import { PasswordInput } from '@ark-ui/react/password-input';
import { fieldText } from './textfieldComponent.styles';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

interface TextfieldComponentProps {
  value?: string | number;
  label?: string;
  required?: boolean;
  helperText?: string;
  errorText?: React.ReactNode | string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  ref?: React.Ref<HTMLInputElement>;
  type?: 'field' | 'password';
}

export default function TextfieldComponent({
  value,
  label,
  required,
  helperText,
  errorText,
  onChange,
  onBlur,
  ref,
  type = 'field'
}: Readonly<TextfieldComponentProps>) {
  return (
    <Field.Root className={fieldText} invalid={!!errorText}>
      {type === 'field' && (
        <>
          {label && (
            <Field.Label>
              {label}
              {required && '*'}
            </Field.Label>
          )}
          <Field.Input
            value={value}
            onChange={(e) => {
              if (onChange) onChange(e.target.value);
            }}
            onBlur={() => {
              if (onBlur) onBlur();
            }}
            ref={ref}
          />
        </>
      )}
      {type === 'password' && (
        <PasswordInput.Root>
          {label && (
            <PasswordInput.Label>
              {label}
              {required && '*'}
            </PasswordInput.Label>
          )}
          <PasswordInput.Control>
            <PasswordInput.Input
              value={value}
              onChange={(e) => {
                if (onChange) onChange(e.target.value);
              }}
              onBlur={() => {
                if (onBlur) onBlur();
              }}
              ref={ref}
            />
            <PasswordInput.VisibilityTrigger>
              <PasswordInput.Indicator fallback={<FaEyeSlash />}>
                <FaEye />
              </PasswordInput.Indicator>
            </PasswordInput.VisibilityTrigger>
          </PasswordInput.Control>
        </PasswordInput.Root>
      )}
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
      <Field.ErrorText>{errorText}</Field.ErrorText>
    </Field.Root>
  );
}
