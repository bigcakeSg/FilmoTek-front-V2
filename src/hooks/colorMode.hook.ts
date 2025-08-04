import { useState, useEffect } from 'react';

type ColorMode = 'light' | 'dark';

const STORAGE_KEY = 'color-mode';

export function useColorMode() {
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
  }, [colorMode]);

  // Écouter les changements de préférence système *si* l'utilisateur n'a pas forcé (optionnel)
  // useEffect(() => {
  //   const stored = localStorage.getItem(STORAGE_KEY);
  //   if (stored) return; // l'utilisateur a choisi, ne pas override

  //   const mq = window.matchMedia('(prefers-color-scheme: dark)');
  //   const listener = (e: MediaQueryListEvent) => {
  //     applyColorMode(e.matches ? 'dark' : 'light');
  //   };
  //   mq.addEventListener
  //     ? mq.addEventListener('change', listener)
  //     : mq.addListener(listener);
  //   return () => {
  //     mq.removeEventListener
  //       ? mq.removeEventListener('change', listener)
  //       : mq.removeListener(listener);
  //   };
  // }, []);

  const toggleColorMode = () => {
    applyColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return { colorMode, toggleColorMode, setColorMode: applyColorMode };
}
