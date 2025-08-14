import { css } from '@styled-system/css';

export const loginForm = css({
  position: 'relative',
  color: '{foreground}'
});

export const loginFormContent = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  fontSize: '0.9rem',
  '&.loading': {
    opacity: 0
  }
});

export const loadingUser = css({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const alertUserError = css({
  color: 'red',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontWeight: '400'
});
