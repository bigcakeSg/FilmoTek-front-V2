import { css } from '../../../styled-system/css';

const containerHeight = '70vh';

export const moviesContainer = css({
  color: 'text',
  height: containerHeight,
  overflowY: 'auto',
  padding: '50px'
});

export const moviesContent = css({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  justifyContent: 'space-around',
  gap: '20px'
});

export const loaderRefStyle = css({
  height: '1px',
  width: '1px',
  background: 'transparent',
  position: 'absolute',
  bottom: containerHeight,
  zIndex: -1
});
