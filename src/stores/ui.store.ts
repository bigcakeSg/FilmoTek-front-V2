import { create } from 'zustand';
import { combine } from 'zustand/middleware';

interface UiStore {
  modalOpen: boolean;
  tooltipVisible: boolean;
}

export interface UiActions {
  openModal: () => void;
  closeModal: () => void;
  showTooltip: () => void;
  hideTooltip: () => void;
}

const defaultUiContext: UiStore = {
  modalOpen: false,
  tooltipVisible: false
};

const useUiStore = create<UiStore & UiActions>()(
  combine(defaultUiContext, (set) => ({
    openModal: () => set((state) => ({ ...state, modalOpen: true })),
    closeModal: () => set((state) => ({ ...state, modalOpen: false })),
    showTooltip: () => set((state) => ({ ...state, tooltipVisible: true })),
    hideTooltip: () => set((state) => ({ ...state, tooltipVisible: false }))
  }))
);

export default useUiStore;
