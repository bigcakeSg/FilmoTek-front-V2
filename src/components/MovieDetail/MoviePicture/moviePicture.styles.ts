import { css } from '@styled-system/css';

export const moviePoster = css({
  width: { base: 'auto', sm: '100%' },
  height: { base: '100%', sm: 'auto' },
  boxShadow: ' rgba(0, 0, 0, 0.5) 2px 2px 7px 1px',
  border: `solid 1px #263238`
});

export const moviePosterLarge = css({
  maxHeight: '80vh',
  margin: '-10px 0px'
});
