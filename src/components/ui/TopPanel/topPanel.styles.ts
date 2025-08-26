import { css } from '@styled-system/css';

export const topPanel = css({
  display: 'flex',
  flexDirection: 'column',
  fontWeight: '400',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '{background}',
  zIndex: 10000,
  overflow: 'hidden',
  padding: {
    base: '0 50px',
    xl: '0 150px',
    '2xl': '0 300px',
    '3xl': '0 50px',
    '4xl': '0 200px',
    '5xl': '0 300px'
  },
  '&.open': {
    transition: 'height 0.3s ease-in',
    height: '250px'
  },
  '&.closed': {
    transition: 'height 0.3s ease-out',
    height: 0
  }
});

export const topPanelOverlay = css({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  pointerEvents: 'none',
  '&.open': {
    backdropFilter: 'blur(10px) brightness(20%)',
    pointerEvents: 'all'
  }
});
