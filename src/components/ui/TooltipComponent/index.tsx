import { Tooltip } from '@ark-ui/react/tooltip';
import { tooltip } from './tooltipComponent.styles';

interface TooltipComponentProps {
  children: React.ReactNode;
  message: string | React.ReactNode;
}

export default function TooltipComponent({
  children,
  message
}: Readonly<TooltipComponentProps>) {
  return (
    <div className={tooltip}>
      <Tooltip.Root openDelay={0} closeDelay={500}>
        <Tooltip.Trigger>{children}</Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            {message}
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    </div>
  );
}
