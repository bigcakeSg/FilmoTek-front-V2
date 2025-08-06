import { css, cva } from '@styled-system/css';

export const movieCollectionTools = css({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  position: 'absolute',
  height: '30px',
  bottom: '10px',
  left: '-10px',
  right: 0,
  paddingLeft: '10px',
  paddingTop: '3px',
  background: {
    base: 'linear-gradient(90deg,rgba(38, 50, 56, 1) 0%,rgba(38, 50, 56, 1) 50%,rgba(38, 50, 56, 0) 100%)',
    _dark:
      'linear-gradient(90deg,rgba(194, 196, 185, 1) 0%,rgba(194, 196, 185, 1) 50%,rgba(194, 196, 185, 0) 100%)'
  }
});

export const toolButton = cva({
  base: {
    transition: 'color 0.2s',
    cursor: 'pointer',
    _hover: {
      color: {
        base: 'lightGold',
        _dark: 'darkGold'
      },
      opacity: '1'
    }
  },
  variants: {
    status: {
      active: {
        color: '{background}',
        opacity: '0.8'
      },
      inactive: {
        color: '{background}',
        opacity: '0.2'
      }
    }
  }
});
