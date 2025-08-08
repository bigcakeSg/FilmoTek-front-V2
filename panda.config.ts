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
    '--color-light': '#f0f2e9',
    '--color-dark': '#11171b',
    '--color-secondary-light': '#2a3943ff',
    '--color-secondary-dark': '#353532',
    '--color-secondary-ultralight': '#a9b3baff',
    '--color-secondary-ultradark': '#20201e',
    '--color-light-gold': '#eaba2b',
    '--color-dark-gold': '#df8600'
  },

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      tokens: {
        colors: {
          lightGold: { value: 'var(--color-light-gold)' },
          darkGold: { value: 'var(--color-dark-gold)' },
          contrast: {
            light: { value: 'var(--color-light)' },
            dark: { value: 'var(--color-dark)' },
            secondaryLight: { value: 'var(--color-secondary-light)' },
            secondaryDark: { value: 'var(--color-secondary-dark)' },
            secondaryUltraLight: { value: 'var(--color-secondary-ultralight)' },
            secondaryUltraDark: { value: 'var(--color-secondary-ultradark)' }
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
          secondaryBackground: {
            value: {
              base: '{colors.contrast.secondaryLight}',
              _dark: '{colors.contrast.secondaryDark}'
            }
          },
          secondaryBackgroundOver: {
            value: {
              base: '{colors.contrast.secondaryUltraLight}',
              _dark: '{colors.contrast.secondaryUltraDark}'
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
          },
          hover: {
            value: {
              base: '{colors.lightGold}',
              _dark: '{colors.darkGold}'
            }
          },
          negativeText: {
            value: {
              base: '{colors.contrast.light}',
              _dark: '{colors.contrast.dark}'
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
