import { css } from '@styled-system/css';

export const moviePanelList = css({
  display: 'flex',
  flexDirection: 'column'
});

export const nameMovies = css({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '10px',
  marginBottom: '20px',
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

export const namePicture = css({
  width: '150px',
  height: '180px',
  borderTop: 'solid 1px',
  borderLeft: 'solid 1px',
  borderRight: 'solid 1px',
  '& img': {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  }
});

export const movieTilePanel = css({
  display: 'flex',
  gap: '10px',
  fontSize: '0.9rem',
  padding: '10px',
  rounded: '5px',
  _hover: {
    backgroundColor: { base: '#00000011', _dark: '#ffffff11' }
  },
  '& .movie-detail': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '5px 0'
  },
  '& .original-title': {
    fontWeight: '700'
  },
  '& .role': {
    fontStyle: 'italic'
  }
});

export const imageFrame = css({
  minWidth: '100px',
  height: '145px',
  border: '1px solid',
  borderColor: '{foreground}',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%'
  }
});
