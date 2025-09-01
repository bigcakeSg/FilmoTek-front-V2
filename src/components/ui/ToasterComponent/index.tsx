import { Toast, Toaster } from '@ark-ui/react/toast';
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaTriangleExclamation,
  FaCircleInfo
} from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { toasterContent, toasterStyles } from './toaster.styles';
import { toaster } from './toaster';

const iconMap = {
  success: FaCircleCheck,
  error: FaCircleExclamation,
  warning: FaTriangleExclamation,
  info: FaCircleInfo
};

export default function ToasterComponent() {
  return (
    <Toaster toaster={toaster} className={toasterStyles}>
      {(toast) => {
        const ToastIcon = toast.type
          ? iconMap[toast.type as keyof typeof iconMap]
          : undefined;

        return (
          <Toast.Root key={toast.id}>
            <div className={toasterContent}>
              <div className="toaster-icon">{ToastIcon && <ToastIcon />}</div>
              <div>
                <Toast.Title>{toast.title}</Toast.Title>
                <Toast.Description>{toast.description}</Toast.Description>
              </div>
            </div>
            <Toast.CloseTrigger>
              <IoClose />
            </Toast.CloseTrigger>
          </Toast.Root>
        );
      }}
    </Toaster>
  );
}
