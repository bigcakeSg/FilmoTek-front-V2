import { css } from '@styled-system/css';

export const moviesContainer = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  position: 'relative'
});

export const moviesScroll = css({
  height: '100%',
  overflow: 'auto',
  padding: {
    base: '0 50px',
    sm: '0 20px',
    md: '0 5px',
    lg: '0 50px',
    xl: '0 150px',
    '2xl': '0 300px',
    '3xl': '0 50px',
    '4xl': '0 200px',
    '5xl': '0 300px'
  }
});

export const moviesContent = css({
  display: 'grid',
  justifyItems: 'center',
  gridTemplateColumns: {
    base: 'repeat(1, minmax(100px, 1fr))',
    sm: 'repeat(2, minmax(100px, 1fr))',
    md: 'repeat(3, minmax(100px, 1fr))',
    lg: 'repeat(5, minmax(100px, 1fr))',
    '3xl': 'repeat(10, minmax(100px, 1fr))'
  },
  gap: '15px',
  margin: '20px auto'
});
