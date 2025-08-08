import { css } from '@styled-system/css';

export const moviesContainer = css({
  height: '100%',
  overflow: 'auto',
  padding: {
    base: '0 50px',
    lg: '0 100px',
    xl: '0 200px'
  }
});

export const moviesContent = css({
  margin: '20px 0',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  width: '100%',
  gap: '20px'
});
