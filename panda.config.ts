import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  globalVars: {
    '--font-outfit': 'Outfit Variable, monospace'
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
          fontOutfit: { value: 'var(--font-outfit), monospace' }
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
          foreground: {
            value: {
              base: '{colors.brand.dark}',
              _dark: '{colors.brand.light}'
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
