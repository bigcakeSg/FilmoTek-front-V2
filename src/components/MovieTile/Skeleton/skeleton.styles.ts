import { css } from '@styled-system/css';

export const tileSketeton = css({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  animation: 'skeleton 1s linear infinite alternate',
  aspectRatio: 0.68,
  // TODO: afficher sous forme de liste quand on est sur petit écran
  width: { base: '100%', sm: '250px', md: '180px', xl: '180px' },
  '& .skeleton-icon': {
    fontSize: '3rem',
    color: '#ffffff66'
  },
  '& .skeleton-text': {
    fontSize: '1rem',
    fontWeight: 400,
    color: '#ffffff66'
  }
});
