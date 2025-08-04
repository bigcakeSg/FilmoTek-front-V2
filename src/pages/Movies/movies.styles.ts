import { css } from '../../../styled-system/css';

export const moviesContainer = css({
  bg: 'background',
  color: 'text',
  height: '60vh',
  overflowY: 'auto'
});

export const moviesContent = css({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%'
});

export const movieTile = css({
  margin: '20px',
  width: '200px',
  height: '300px'
});

export const loaderRefStyle = css({
  height: '1px',
  width: '1px',
  background: 'transparent',
  position: 'absolute',
  bottom: '60vh', // same size as the container
  zIndex: -1
});
