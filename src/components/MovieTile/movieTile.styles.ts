import { css } from '@styled-system/css';

export const movieTile = css({
  position: 'relative',
  boxShadow: {
    base: 'rgba(0, 0, 0, 0.5) 2px 2px 7px 1px',
    _dark: 'rgba(0, 0, 0, 1) 1px 1px 15px 2px'
  },
  transitionDuration: '0.5s',
  aspectRatio: 0.68,
  width: { base: '100%', sm: '40%', md: '180px', xl: '200px' },
  '& .movie': {
    '&-picture': {
      position: 'absolute',
      transitionDuration: '0.5s',
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '101% 101%'
    },
    '&-overlay': {
      border: 'solid 1px',
      borderColor: '{foreground}',
      backdropFilter: 'blur(0px) brightness(100%)',
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    '&-infos': {
      display: 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      color: '#ffffff',
      padding: '15px',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    '&-original_title': {
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      fontWeight: 700,
      marginBottom: '5px',
      textShadow: '#000 1px 1px'
    },
    '&-french_title': {
      fontSize: '1.1rem',
      lineHeight: '1.2rem',
      fontWeight: 300,
      textShadow: '#000 1px 1px'
    },
    '&-release_date': {
      fontSize: '1.1rem',
      position: 'absolute',
      textAlign: 'right',
      bottom: '45px',
      right: '10px'
    }
  },
  '&:hover': {
    boxShadow: '2px 2px 7px 1px rgba(0, 0, 0, 0)',
    color: '#263238',
    borderColor: '#263238',
    '& .movie': {
      '&-picture': {
        backgroundSize: '150% 150%'
      },
      '&-overlay': {
        backdropFilter: 'blur(10px) brightness(50%)'
      },
      '&-infos': {
        display: 'flex'
      }
    }
  }
});
