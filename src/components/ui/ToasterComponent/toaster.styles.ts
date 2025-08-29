import { css } from '@styled-system/css';

export const toasterStyles = css({
  '& [data-scope="toast"]': {
    fontSize: '0.9rem',
    fontWeight: '400',
    '&[data-part="root"]': {
      position: 'relative',
      background: 'white',
      width: '360px',
      rounded: '10px',
      boxShadow: '2px 2px 7px 2px #00000066',
      overflowWrap: 'anywhere',
      translate: 'var(--x) var(--y)',
      scale: 'var(--scale)',
      zIndex: 'var(--z-index)',
      opacity: 'var(--opacity)',
      willChange: 'translate, opacity, scale',
      transition:
        'translate 400ms, scale 400ms, opacity 400ms, height 400ms, box-shadow 200ms',
      transitionTimingFunction: 'cubic-bezier(0.21, 1.02, 0.73, 1)',
      '&[data-state="closed"]': {
        transition: 'translate 400ms, scale 400ms, opacity 200ms',
        transitionTimingFunction: 'cubic-bezier(0.06, 0.71, 0.55, 1)'
      },
      '&[data-type="error"]': {
        background: '#6d1617',
        color: '#ffffff'
      },
      '&[data-type="info"]': {
        background: '#12304e',
        color: '#ffffff'
      },
      '&[data-type="warning"]': {
        background: '#e7af24',
        color: '#000000'
      },
      '&[data-type="success"]': {
        background: '#145625',
        color: '#ffffff'
      }
    },
    '&[data-part="close-trigger"]': {
      position: 'absolute',
      right: '8px',
      top: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      fontSize: '18px',
      padding: 0,
      '& svg': {
        width: '1em',
        height: '1em'
      }
    },
    '&[data-part="title"]': {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '1.1rem',
      fontWeight: '700'
    }
  }
});

export const toasterContent = css({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  padding: '10px 15px',
  '& .toaster-icon': {
    fontSize: '1.2rem',
    marginTop: '3px'
  }
});
