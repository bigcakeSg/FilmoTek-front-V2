import { css } from '@styled-system/css';

export const movieContainer = css({
  position: 'relative',
  height: '100%'
});

export const buttonsContainer = css({
  display: 'flex',
  gap: '8px',
  position: 'absolute',
  right: '15px',
  top: '15px',
  zIndex: 10
});
