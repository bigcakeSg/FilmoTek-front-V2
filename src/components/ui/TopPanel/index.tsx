import useUiStore from '@stores/ui.store';
import { topPanel, topPanelOverlay } from './topPanel.styles';

interface TopPanelProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export default function TopPanel({
  children,
  onClose
}: Readonly<TopPanelProps>) {
  const { topPanelOpen, closeTopPanel } = useUiStore();

  const handleClosePanel = () => {
    closeTopPanel();
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
        className={`${topPanelOverlay} ${topPanelOpen ? 'open' : 'closed'}`}
      ></div>
      <div className={`${topPanel} ${topPanelOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </>
  );
}
