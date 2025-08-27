import { css } from '@styled-system/css';

export const notFoundContainer = css({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#ffffff',
  textShadow: '1px 1px 2px #000000',
  '& .not-found': {
    fontSize: '9rem',
    fontWeight: 700,
    lineHeight: '8rem',
    '& .not': {
      fontSize: '7rem',
      fontWeight: 400
    }
  },
  '& .mistake': {
    fontSize: '4rem',
    marginBottom: '50px'
  }
});

export const backButton = css({
  border: '1px solid #ffffff',
  rounded: '10px',
  fontSize: '1rem',
  fontWeight: 400,
  padding: '15px',
  backgroundColor: '#ffffff11',
  _hover: {
    backgroundColor: '#ffffff33'
  }
});
