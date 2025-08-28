import { css } from '@styled-system/css';

export const modalGlobalStyles = css({
  '& [data-scope="dialog"]': {
    '&[data-part="positioner"]': {
      display: 'flex',
      overflow: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      zIndex: '10',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    },
    '&[data-part="content"]': {
      position: 'relative',
      backgroundColor: '{background}',
      padding: '20px',
      rounded: '10px',
      fontSize: '0.9rem',
      fontWeight: '400'
    },
    '&[data-part="title"]': {
      fontSize: '1.2rem',
      fontWeight: '700'
    },
    '&[data-part="description"]': {
      margin: '10px 0'
    },
    '&[data-part="backdrop"]': {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backdropFilter: 'blur(10px) brightness(20%)',
      zIndex: 10
    },
    '&[data-part="close-trigger"]': {
      position: 'absolute',
      top: '5px',
      right: '5px',
      fontSize: '1.3rem'
    }
  }
});
