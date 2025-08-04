import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  globalVars: {
    '--font-fira-code': 'Fira Code Variable, monospace',
    '--font-mona-sans': 'Mona Sans, sans-serif',
    '--font-roboto-sans': 'Roboto Sans, sans-serif',
    '--font-roboto-condensed': 'Roboto Condensed, sans-serif'
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            light: { value: '#b6d6d6' },
            dark: { value: '#041014' }
          }
        },
        fonts: {
          roboto: { value: 'var(--font-roboto-sans), sans-serif' },
          robotoCondensed: { value: 'var(--font-roboto-condensed), sans-serif' }
        }
      },
      semanticTokens: {
        colors: {
          background: {
            value: {
              base: '{colors.brand.light}',
              _dark: '{colors.brand.dark}'
            }
          },
          text: {
            value: {
              base: 'black',
              _dark: 'white'
            }
          }
        }
      }
    }
  },

  // Add a global style using semantic tokens
  globalCss: {
    body: {
      backgroundColor: '{background}',
      color: '{text}',
      fontFamily: '{robotoCondensed}',
      fontSize: '20px',
      lineHeight: '1.5',
      margin: '0'
    }
  },

  // The output directory for your css system
  outdir: 'styled-system',

  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &'
  }
});
