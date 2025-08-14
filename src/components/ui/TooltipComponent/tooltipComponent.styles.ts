import { css } from '@styled-system/css';

export const tooltip = css({
  display: 'flex',
  '& [data-scope="tooltip"]': {
    '&[data-part="content"]': {
      backgroundColor: {
        base: '{colors.contrast.secondaryLight}',
        _dark: '{colors.contrast.light}'
      },
      color: 'negativeText',
      padding: '10px',
      rounded: '10px',
      zIndex: '10000',
      fontSize: '0.8rem',
      fontWeight: '500',
      boxShadow: {
        base: 'rgba(0, 0, 0, 0.5) 2px 2px 7px 1px',
        _dark: 'rgba(0, 0, 0, 1) 1px 1px 15px 2px'
      },
      border: 'solid 1px',
      borderColor: '{background}',
      '&[data-state=open]': {
        animation: 'fadein 0.3s ease-in'
      },
      '&[data-state=closed]': {
        animation: 'fadeout 0.3s ease-out'
      }
    },
    '&[data-part="arrow"]': {
      '--arrow-size': '12px',
      width: 'var(--arrow-size)',
      height: 'var(--arrow-size)',
      rotate: '45deg',
      borderColor: '{background}',
      backgroundColor: {
        base: '{colors.contrast.secondaryLight}',
        _dark: '{colors.contrast.light}'
      }
    },
    '&[data-placement="top"]': {
      '& [data-scope="tooltip"][data-part="arrow"]': {
        rounded: '0px 0 3px 0',
        borderBottom: 'solid 1px',
        borderRight: 'solid 1px'
      }
    },
    '&[data-placement="bottom"]': {
      '& [data-scope="tooltip"][data-part="arrow"]': {
        rounded: '3px 0 0 0',
        borderTop: 'solid 1px',
        borderLeft: 'solid 1px'
      }
    },
    '&[data-placement="left"]': {
      '& [data-scope="tooltip"][data-part="arrow"]': {
        rounded: '0 3px 0 0',
        borderTop: 'solid 1px',
        borderRight: 'solid 1px'
      }
    },
    '&[data-placement="right"]': {
      '& [data-scope="tooltip"][data-part="arrow"]': {
        rounded: '0 0 0 3px',
        borderLeft: 'solid 1px',
        borderBottom: 'solid 1px'
      }
    }
  }
});
