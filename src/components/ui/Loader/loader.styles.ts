import { css } from '@styled-system/css';

export const loaderContainer = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  fontWeight: '400'
});

export const loader = css({
  width: '48px',
  height: '48px',
  border: '3px dotted',
  borderColor: '{foreground}',
  borderStyle: 'solid solid dotted dotted',
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  boxSizing: 'border-box',
  animation: 'rotation 2s linear infinite',
  '& .loader__inset': {
    boxSizing: 'border-box',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    border: '3px dotted #FF3D00',
    borderColor: '{hover}',
    borderStyle: 'solid solid dotted',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    animation: 'rotationReverse 1s linear infinite',
    transformOrigin: 'center center'
  }
});
