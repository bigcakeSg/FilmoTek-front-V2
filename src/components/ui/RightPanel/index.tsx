import { IoClose } from 'react-icons/io5';
import useUiStore from '@/stores/ui.store';
import {
  closeIcon,
  panelContent,
  rightPanelOverlay,
  rightPanel
} from './rightPanel.styles';

interface RightPanelProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export default function RightPanel({
  children,
  onClose
}: Readonly<RightPanelProps>) {
  const { rightPanelOpen, closeRightPanel } = useUiStore();

  const handleClosePanel = () => {
    closeRightPanel();
    onClose?.();
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleClosePanel()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClosePanel();
          }
        }}
        className={`${rightPanelOverlay} ${rightPanelOpen ? 'open' : 'closed'}`}
      ></div>
      <div className={`${rightPanel} ${rightPanelOpen ? 'open' : 'closed'}`}>
        <button className={closeIcon} onClick={handleClosePanel}>
          <IoClose />
        </button>
        <div className={panelContent}>
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
}
