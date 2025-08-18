import { create } from 'zustand';
import { combine } from 'zustand/middleware';

interface UiStore {
  modalOpen: boolean;
  rightPanelOpen: boolean;
  topPanelOpen: boolean;
}

export interface UiActions {
  openModal: () => void;
  closeModal: () => void;
  openRightPanel: () => void;
  closeRightPanel: () => void;
  openTopPanel: () => void;
  closeTopPanel: () => void;
}

const defaultUiContext: UiStore = {
  modalOpen: false,
  rightPanelOpen: false,
  topPanelOpen: false
};

const useUiStore = create<UiStore & UiActions>()(
  combine(defaultUiContext, (set) => ({
    openModal: () => set((state) => ({ ...state, modalOpen: true })),
    closeModal: () => set((state) => ({ ...state, modalOpen: false })),
    openRightPanel: () => set((state) => ({ ...state, rightPanelOpen: true })),
    closeRightPanel: () =>
      set((state) => ({ ...state, rightPanelOpen: false })),
    openTopPanel: () => set((state) => ({ ...state, topPanelOpen: true })),
    closeTopPanel: () => set((state) => ({ ...state, topPanelOpen: false }))
  }))
);

export default useUiStore;
