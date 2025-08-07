import { css } from '@styled-system/css';

export const langIcon = css({
  width: '20px',
  height: '13px',
  overflow: 'hidden',
  rounded: '3px'
});

export const menuLang = css({
  '& [data-scope="menu"]': {
    '&[data-part="trigger"], [data-part="content"]': {
      outline: 'none'
    },
    '&[data-part="item"]': {
      cursor: 'pointer',
      padding: '10px',
      rounded: '10px',
      _hover: {
        backgroundColor: '#ffffff22'
      },
      '& > div': {
        boxShadow: '1px 1px 4px 2px #00000066'
      }
    },
    '& [data-part="content"]': {
      padding: '5px',
      backgroundColor: '{secondaryBackground}',
      boxShadow: '2px 2px 7px 1px #00000044',
      rounded: '10px',
      '&[data-state=open]': {
        animation: 'fadein 0.2s ease-in'
      },
      '&[data-state=closed]': {
        animation: 'fadeout 0.2s ease-out'
      }
    }
  }
});
