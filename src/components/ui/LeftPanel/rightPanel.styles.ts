import { css } from '@styled-system/css';

export const rightPanel = css({
  position: 'fixed',
  zIndex: 1000,
  top: 0,
  right: 0,
  height: '100vh',
  backgroundColor: '{background}',
  display: 'flex',
  flexDirection: 'column',
  '&.open': {
    transition: 'width 0.3s ease-in',
    width: '500px',
    maxWidth: '100vw'
  },
  '&.closed': {
    transition: 'width 0.3s ease-out',
    width: 0
  }
});

export const panelOverlay = css({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: '#000000',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.3s ease',
  '&.open': {
    opacity: 0.8,
    pointerEvents: 'all'
  }
});

export const closeIcon = css({
  color: '{foreground}',
  fontSize: '3rem',
  margin: '10px',
  _hover: {
    color: '{hover}'
  }
});

export const panelContent = css({
  width: '500px',
  maxWidth: '100vw',
  overflowY: 'auto',
  // overflowX: 'hidden',
  '& > .content': {
    width: '100%',
    padding: '10px 30px 50px 30px'
  }
});
