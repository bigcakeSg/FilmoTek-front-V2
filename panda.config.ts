import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  globalVars: {
    '--font-outfit': 'Outfit Variable, monospace',
    '--color-light': '#f0f2e9ff',
    '--color-dark': '#11141bff',
    '--color-light-gold': '#eaba2bff',
    '--color-dark-gold': '#df8600ff'
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          lightGold: { value: 'var(--color-light-gold)' },
          darkGold: { value: 'var(--color-dark-gold)' },
          contrast: {
            light: { value: 'var(--color-light)' },
            dark: { value: 'var(--color-dark)' }
          }
        },
        fonts: {
          fontOutfit: { value: 'var(--font-outfit), monospace' }
        }
      },
      semanticTokens: {
        colors: {
          background: {
            value: {
              base: '{colors.contrast.light}',
              _dark: '{colors.contrast.dark}'
            }
          },
          foreground: {
            value: {
              base: '{colors.contrast.dark}',
              _dark: '{colors.contrast.light}'
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
      fontFamily: '{fontOutfit}',
      fontWeight: '100',
      fontSize: '20px',
      lineHeight: '1.5',
      margin: '0'
    },
    button: {
      cursor: 'pointer'
    }
  },

  // The output directory for your css system
  outdir: 'styled-system',

  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &'
  }
});
