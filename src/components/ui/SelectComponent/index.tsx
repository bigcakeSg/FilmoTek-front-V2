import { Item } from '@/interfaces/ui.interface';
import { Portal } from '@ark-ui/react/portal';
import { Select, createListCollection } from '@ark-ui/react/select';
import { LuChevronDown } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';

interface SelectComponentProps {
  label?: string;
  placeholder?: string;
  options: Item[];
  value?: string;
  onChange: (items: Item[]) => void;
  isRemovable?: boolean;
}

export default function SelectComponent({
  label,
  placeholder,
  options,
  value,
  onChange,
  isRemovable
}: Readonly<SelectComponentProps>) {
  const collection = createListCollection<Item>({
    items: options
  });

  return (
    <Select.Root
      collection={collection}
      onValueChange={(e) => onChange(e.items)}
      {...(value ? { value: [value] } : {})}
    >
      {label && <Select.Label>{label}</Select.Label>}
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
          <Select.Indicator>
            <LuChevronDown />
          </Select.Indicator>
        </Select.Trigger>
        {isRemovable && (
          <Select.ClearTrigger>
            <IoClose />
          </Select.ClearTrigger>
        )}
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              {collection.items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
}
