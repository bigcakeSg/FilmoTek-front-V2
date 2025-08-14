import { css } from '@styled-system/css';

export const rootTemplate = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'hidden'
});

export const rootContent = css({
  overflow: 'hidden',
  flex: 1
});

export const rootFooter = css({
  height: '{sizes.footer}',
  fontSize: '0.8rem',
  padding: '0 30px',
  textAlign: 'right',
  fontWeight: '500',
  backgroundColor: '{secondaryBackground}',
  color: '#ffffff',
  position: 'absolute',
  bottom: 0,
  width: '100%'
});
