import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true
    }),
    tsconfigPaths(),
    svgr({
      include: '**/*.svg?react'
    }),
    react()
  ]
});
