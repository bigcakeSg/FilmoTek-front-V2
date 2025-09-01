import { create } from 'zustand';
import { combine } from 'zustand/middleware';

interface UiStore {
  modalOpen: boolean;
  modalContent: {
    title?: React.ReactNode | string;
    content: React.ReactNode;
  } | null;
  rightPanelOpen: boolean;
  topPanelOpen: boolean;
}

export interface UiActions {
  openModal: (
    content: {
      title?: React.ReactNode | string;
      content: React.ReactNode;
    } | null
  ) => void;
  closeModal: () => void;
  openRightPanel: () => void;
  closeRightPanel: () => void;
  openTopPanel: () => void;
  closeTopPanel: () => void;
}

const defaultUiContext: UiStore = {
  modalOpen: false,
  modalContent: null,
  rightPanelOpen: false,
  topPanelOpen: false
};

const useUiStore = create<UiStore & UiActions>()(
  combine(defaultUiContext, (set) => ({
    openModal: (content) =>
      set((state) => ({ ...state, modalOpen: true, modalContent: content })),
    closeModal: () =>
      set((state) => ({ ...state, modalOpen: false, modalContent: null })),
    openRightPanel: () => set((state) => ({ ...state, rightPanelOpen: true })),
    closeRightPanel: () =>
      set((state) => ({ ...state, rightPanelOpen: false })),
    openTopPanel: () => set((state) => ({ ...state, topPanelOpen: true })),
    closeTopPanel: () => set((state) => ({ ...state, topPanelOpen: false }))
  }))
);

export default useUiStore;
