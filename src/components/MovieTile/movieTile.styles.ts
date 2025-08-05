import { css } from '@styled-system/css';

const miniWidth = 200;
const miniHeight = 294;

export const movieTile = css({
  position: 'relative',
  border: 'solid 1px',
  borderColor: '{foreground}',
  boxShadow: {
    base: 'rgba(0, 0, 0, 0.5) 2px 2px 7px 1px',
    _dark: 'rgba(0, 0, 0, 1) 1px 1px 15px 2px'
  },
  transitionDuration: '0.5s',
  width: `${miniWidth}px`,
  height: `${miniHeight}px`,
  fontSize: '20px',
  lineHeight: '20px',
  '& .movie': {
    '&-picture': {
      position: 'absolute',
      transitionDuration: '0.5s',
      width: `${miniWidth - 2}px`,
      height: `${miniHeight - 2}px`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '101% 101%'
    },
    '&-overlay': {
      backdropFilter: 'blur(0px) brightness(100%)',
      position: 'absolute',
      width: `${miniWidth - 2}px`,
      height: `${miniHeight - 2}px`
    },
    '&-infos': {
      display: 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      width: `${miniWidth}px`,
      height: `${miniHeight}px`,
      color: '#fff',
      padding: '15px',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    '&-original_title': {
      fontWeight: 700,
      marginBottom: '5px'
    },
    '&-french_title': {
      fontWeight: 300
    },
    '&-release_date': {
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
