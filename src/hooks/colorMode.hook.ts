import { useState, useEffect } from 'react';

export type ColorMode = 'light' | 'dark';
const STORAGE_KEY = 'color-mode';

export const useColorMode = () => {
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem(STORAGE_KEY) as ColorMode | null;
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return prefersDark ? 'dark' : 'light';
  });

  const applyColorMode = (m: ColorMode) => {
    document.documentElement.setAttribute('data-color-mode', m);
    localStorage.setItem(STORAGE_KEY, m);
    setColorMode(m);
  };

  useEffect(() => {
    applyColorMode(colorMode);
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute('content', colorMode);
    }
  }, [colorMode]);

  const toggleColorMode = () => {
    applyColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return { colorMode, toggleColorMode, setColorMode: applyColorMode };
};
