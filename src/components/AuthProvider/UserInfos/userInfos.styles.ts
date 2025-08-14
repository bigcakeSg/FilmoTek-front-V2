import { css } from '@styled-system/css';

export const userInfos = css({
  color: '{foreground}',
  fontSize: '0.9rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  '& .name': {
    fontWeight: '700'
  }
});
