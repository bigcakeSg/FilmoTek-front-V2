import { Popover } from '@ark-ui/react/popover';
import { IoClose } from 'react-icons/io5';
import { popover } from './popoverComponent.styles';

interface PopoverComponentProps {
  trigger: React.ReactNode;
  title?: string;
  children: React.ReactNode;
}

export default function PopoverComponent({
  trigger,
  title,
  children
}: Readonly<PopoverComponentProps>) {
  return (
    <div className={popover}>
      <Popover.Root positioning={{ placement: 'bottom-end' }}>
        <Popover.Trigger>{trigger}</Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content>
            {title && <Popover.Title>{title}</Popover.Title>}
            <Popover.Description>{children}</Popover.Description>
            <Popover.CloseTrigger>
              <IoClose />
            </Popover.CloseTrigger>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    </div>
  );
}
