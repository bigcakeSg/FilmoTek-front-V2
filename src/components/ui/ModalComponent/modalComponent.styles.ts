import { css } from '@styled-system/css';

export const modalGlobalStyles = css({
  '& [data-scope="dialog"]': {
    '&[data-part="positioner"]': {
      display: 'flex',
      overflow: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      zIndex: 'var(--z-index-modal)',
      left: 'var(--spacing-0)',
      top: 'var(--spacing-0)',
      width: '100vw',
      height: '100dvh'
    },
    '&[data-part="content"]': {
      //
    },
    '&[data-part="backdrop"]': {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backdropFilter: 'blur(10px) brightness(20%)'
    }
  }
});
