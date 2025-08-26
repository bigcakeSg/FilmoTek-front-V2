import { css, cva } from '@styled-system/css';

export const movieDetailSupport = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
  width: { base: '350px', '2xl': 'auto' }
});

export const supportLogo = cva({
  base: {
    fill: { base: '#000000', _dark: '#ffffff' },
    width: '40px'
  },
  variants: {
    status: {
      active: { opacity: 1 },
      inactive: { opacity: 0.2 }
    },
    role: {
      admin: { cursor: 'pointer' },
      user: { cursor: 'default' }
    }
  }
});
