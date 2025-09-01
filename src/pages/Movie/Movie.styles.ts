import { css } from '@styled-system/css';

export const movieDeleteModal = css({
  width: '300px'
});

export const movieDeleteModalTitle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
});

export const movieDeleteButtons = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px'
});

export const loaderContainer = css({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center'
});

export const movieContainer = css({
  position: 'relative',
  height: '100%'
});

export const buttonsContainer = css({
  display: 'flex',
  gap: '8px',
  position: 'absolute',
  right: '15px',
  top: '15px',
  zIndex: 1
});
