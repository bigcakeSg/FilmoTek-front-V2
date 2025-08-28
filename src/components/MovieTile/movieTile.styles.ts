import { css } from '@styled-system/css';

export const movieTile = css({
  position: 'relative',
  boxShadow: {
    base: 'rgba(0, 0, 0, 0.5) 2px 2px 7px 1px',
    _dark: 'rgba(0, 0, 0, 1) 1px 1px 15px 2px'
  },
  transitionDuration: '0.5s',
  aspectRatio: 0.68,
  // TODO: afficher sous forme de liste quand on est sur petit écran
  width: { base: '100%', sm: '250px', md: '180px', xl: '180px' }
});
