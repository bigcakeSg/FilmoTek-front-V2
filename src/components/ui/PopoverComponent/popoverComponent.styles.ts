import { css } from '@styled-system/css';

export const popover = css({
  '& [data-scope="popover"]': {
    '&[data-part="content"]': {
      zIndex: '1000',
      padding: '20px',
      backgroundColor: '{secondaryBackgroundOver}',
      boxShadow: '2px 2px 7px 2px #00000044',
      rounded: '10px',
      '&[data-state=open]': {
        animation: 'fadein 0.2s ease-in'
      },
      '&[data-state=closed]': {
        animation: 'fadeout 0.2s ease-out'
      }
    },
    '&[data-part="trigger"]': {
      display: 'flex'
    },
    '&[data-part="close-trigger"]': {
      position: 'absolute',
      top: '5px',
      right: '5px',
      color: '{foreground}'
    }
  }
});
