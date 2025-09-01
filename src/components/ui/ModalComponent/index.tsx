import { IoClose } from 'react-icons/io5';
import useUiStore from '@stores/ui.store';
import { Dialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';

export default function ModalComponent() {
  const { modalOpen, openModal, closeModal, modalContent } = useUiStore();

  const handleOpenModal = () => {
    openModal(null);
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <Dialog.Root
      open={modalOpen}
      onOpenChange={(e) => {
        if (e.open) {
          handleOpenModal();
        } else {
          handleCloseModal();
        }
      }}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            {modalContent?.title && (
              <Dialog.Title>{modalContent.title}</Dialog.Title>
            )}
            <Dialog.Description>{modalContent?.content}</Dialog.Description>
            <Dialog.CloseTrigger>
              <IoClose />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
