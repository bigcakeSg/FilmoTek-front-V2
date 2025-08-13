import { css } from '@styled-system/css';

export const filterButtonContainer = css({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  marginRight: '10px'
});

export const filterButton = css({
  rounded: '5px',
  padding: '2px 5px',
  fontWeight: '700',
  _hover: {
    backgroundColor: '#ffffff22'
  }
});

export const movieCount = css({
  color: {
    base: 'contrast.secondaryLight',
    _dark: '#ffffff'
  },
  backgroundColor: 'background',
  fontSize: '0.8rem',
  padding: '5px 10px',
  rounded: '5px',
  fontWeight: '400',
  '& .filteredCount': {
    fontWeight: '700'
  }
});
