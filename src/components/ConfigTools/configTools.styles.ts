import { css } from '@styled-system/css';

export const configTools = css({
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
});

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
        boxShadow: '1px 1px 4px 1px #00000066'
      }
    },
    '& [data-part="content"]': {
      padding: '5px',
      backgroundColor: '{secondaryBackground}',
      boxShadow: '2px 2px 7px 1px #00000066',
      rounded: '10px'
    },
    '&[data-part=content][data-state=open]': {
      animation: 'fadein 0.2s ease-in'
    },
    '&[data-part=content][data-state=closed]': {
      animation: 'fadeout 0.2s ease-out'
    }
  }
});

export const avatar = css({
  '& [data-scope="avatar"]': {
    '&[data-part="root"]': {
      width: { base: '30px', xl: '40px' },
      height: { base: '30px', xl: '40px' },
      rounded: 'full',
      overflow: 'hidden'
    },
    '&[data-part="image"]': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'inherit'
    },
    '&[data-part="fallback"]': {
      width: '100%',
      height: '100%',
      backgroundColor: '#cccccc',
      borderRadius: 'inherit'
    }
  }
});

export const colorModeButton = css({
  display: 'flex',
  alignItems: 'center'
});
