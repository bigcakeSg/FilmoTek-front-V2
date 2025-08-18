import { Checkbox } from '@ark-ui/react/checkbox';
import { LuCheck } from 'react-icons/lu';
import { checkBox } from './checkboxComponent.styles';

interface CheckboxComponentProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function CheckboxComponent({
  label,
  checked,
  onChange
}: Readonly<CheckboxComponentProps>) {
  return (
    <Checkbox.Root
      className={checkBox}
      checked={checked}
      onCheckedChange={(e) => {
        onChange(e.checked as boolean);
      }}
    >
      <Checkbox.Control>
        <Checkbox.Indicator>
          <LuCheck />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>{label}</Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
}
