import { css } from '@styled-system/css';

export const movieCollectionTools = css({
  position: 'absolute',
  height: '30px',
  bottom: '6px',
  left: '-10px',
  right: 0,
  padding: '3px',
  background: {
    base: 'linear-gradient(90deg,rgba(38, 50, 56, 1) 0%,rgba(38, 50, 56, 1) 50%,rgba(38, 50, 56, 0) 100%)',
    _dark:
      'linear-gradient(90deg,rgba(192, 200, 205, 1) 0%,rgba(192, 200, 205, 1) 50%,rgba(192, 200, 205, 0) 100%)'
  },
  boxShadow: 'rgba(0, 0, 0, 0.5) 2px 2px 7px 1px'
});
