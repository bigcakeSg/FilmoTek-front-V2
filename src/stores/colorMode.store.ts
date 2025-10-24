import { create } from 'zustand';
import { combine, createJSONStorage, persist } from 'zustand/middleware';

export type ColorMode = 'light' | 'dark';

const defaultColorMode: () => ColorMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export interface ColorModeActions {
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

const defaultUserContext: { colorMode: ColorMode } = {
  colorMode: defaultColorMode()
};

const useColorModeStore = create<{ colorMode: ColorMode } & ColorModeActions>()(
  persist(
    combine(defaultUserContext, (set) => ({
      setColorMode: (colorMode) => {
        set((state) => ({ ...state, colorMode }));
      },
      toggleColorMode: () =>
        set((state) => {
          const colorMode = state.colorMode === 'dark' ? 'light' : 'dark';
          return {
            colorMode
          };
        })
    })),
    {
      name: 'color-mode',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useColorModeStore;
