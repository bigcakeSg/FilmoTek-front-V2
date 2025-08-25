import { css } from '@styled-system/css';

export const movieLinkContainer = css({
  marginTop: '5px'
});

export const movieLink = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '0.9rem',
  fontWeight: '500',
  textDecoration: 'none',
  color: 'inherit',
  _hover: {
    textDecoration: 'dotted underline'
  }
});

export const imdbLogo = css({
  height: '16px',
  width: '32px'
});
