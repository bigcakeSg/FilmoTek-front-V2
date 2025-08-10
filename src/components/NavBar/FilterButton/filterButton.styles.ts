import { css } from '@styled-system/css';

export const movieCount = css({
  color: {
    base: 'contrast.secondaryLight',
    _dark: '#ffffff'
  },
  backgroundColor: 'background',
  fontSize: '0.8rem',
  padding: '5px 10px',
  borderRadius: '5px',
  fontWeight: '400',
  '& .filteredCount': {
    fontWeight: '700'
  }
});
