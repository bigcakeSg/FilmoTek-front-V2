import { css } from '@styled-system/css';

export const navButtons = css({
  display: 'flex',
  alignItems: 'center',
  gap: '5px'
  // height: '20px'
});

export const navButton = css({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  color: '#ffffff',
  borderRadius: '5px',
  padding: '5px 10px',
  _hover: {
    color: {
      base: 'contrast.secondaryLight',
      _dark: '#ffffff'
    },
    backgroundColor: 'background'
  },
  fontSize: { base: '2rem', xl: '1.3rem' }
});

export const navButtonLabel = css({
  fontSize: '0.8rem',
  fontWeight: '700',
  display: { base: 'none', xl: 'block' }
});
