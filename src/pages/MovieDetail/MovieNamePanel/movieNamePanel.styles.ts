import { css } from '@styled-system/css';

export const moviePanelList = css({
  display: 'flex',
  flexDirection: 'column'
});

export const nameMovies = css({
  fontWeight: '300',
  lineHeight: '1.8rem',
  fontSize: '1.8em',
  borderBottom: '1px solid',
  '& .movie': {
    fontWeight: '700',
    fontSize: '1.4rem'
  },
  '& .count': {
    fontSize: '1.6rem'
  }
});

export const movieTilePanel = css({
  display: 'flex',
  gap: '10px',
  fontSize: '1rem',
  padding: '10px',
  rounded: '5px',
  _hover: {
    backgroundColor: { base: '#00000011', _dark: '#ffffff11' }
  },
  '& .movie-detail': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '10px 0'
  },
  '& .original-title': {
    fontWeight: '700'
  },
  '& .role': {
    fontStyle: 'italic'
  }
});

export const imageFrame = css({
  width: '100px',
  height: '150px',
  border: '1px solid',
  borderColor: '{foreground}',
  overflow: 'hidden'
});
