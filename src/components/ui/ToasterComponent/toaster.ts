import { createToaster } from '@ark-ui/react/toast';

export const DURATION_TOASTER = 3000;

export const toaster = createToaster({
  placement: 'bottom-end',
  gap: 10,
  duration: DURATION_TOASTER
});
