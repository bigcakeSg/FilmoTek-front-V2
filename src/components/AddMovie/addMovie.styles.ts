import { css } from '@styled-system/css';

export const loaderContainer = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
});

export const movieApiForm = css({
  width: '300px',
  '&.loading': {
    opacity: 0,
    position: 'relative'
  }
});

export const alertMovieApiError = css({
  fontWeight: 400,
  color: 'red',
  display: 'flex',
  alignItems: 'center',
  gap: '5px'
});

export const buttonMovieApiForm = css({
  marginTop: '30px',
  '& button': {
    width: '100%'
  }
});
