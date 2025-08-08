import { Field } from '@ark-ui/react/field';

interface TextfieldComponentProps {
  value?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  onChange?: (value: string) => void;
}

export default function TextfieldComponent({
  value,
  label,
  helperText,
  errorText,
  onChange
}: Readonly<TextfieldComponentProps>) {
  return (
    <Field.Root>
      {label && <Field.Label>{label}</Field.Label>}
      <Field.Input
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
      />
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
      {errorText && <Field.ErrorText>{errorText}</Field.ErrorText>}
    </Field.Root>
  );
}
