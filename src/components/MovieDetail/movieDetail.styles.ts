import { css } from '@styled-system/css';

export const movieDetail = css({
  position: 'relative',
  height: '100%',
  fontWeight: '300'
});

export const movieBanner = css({
  width: '100%',
  height: '{sizes.banner}',
  backgroundColor: '{secondaryBackground}',
  '& .movie-banner__image': {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '150%'
  },
  '& .movie-banner__overlay': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(100px)  brightness(100%)'
  },
  '& .movie-banner__gradient': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    backgroundImage: 'linear-gradient(to bottom, #00000066 20%, #00000000 100%)'
  }
});

export const movieDetailContainer = css({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  overflow: 'auto'
});

export const movieDetailContent = css({
  width: '1850px',
  position: 'relative',
  margin: '0 30px',
  display: 'grid',
  height: { base: 'fit-content', sm: 'auto' },
  gridTemplateColumns: {
    base: '[start col1] 1fr [end]',
    sm: '[start col1] 180px [col2] 1fr [end]',
    ['2xl']: '[start col1] 300px [col2] 1fr [end]'
  },
  gridTemplateRows: {
    base: `[start row1] calc({sizes.banner} + 20px) [row2] auto [row3] auto [row4] auto [row5] 1fr [end]`,
    sm: `[start row1] {sizes.banner - 20px} [row2] auto [row3] auto [row4] 1fr [end]`
  }
});

export const movieDetailPicture = css({
  gridColumnStart: { base: 'start' },
  gridColumnEnd: { base: 'span end', sm: 'span col2' },
  gridRowStart: { base: 'start' },
  gridRowEnd: { base: 'span row2', sm: 'span row4' },
  justifySelf: 'center',
  paddingTop: { base: '10px', ['2xl']: '20px' },
  position: 'relative'
});

export const movieDetailInfos = css({
  gridColumnStart: { base: 'col1', sm: 'col2', ['2xl']: 'start' },
  gridColumnEnd: { base: 'span end', sm: 'span end', ['2xl']: 'span col2' },
  gridRowStart: { base: 'row3', sm: 'row2', ['2xl']: 'row3' },
  gridRowEnd: { base: 'span row4', sm: 'span row3', ['2xl']: 'span row4' },
  display: 'flex',
  flexDirection: { base: 'column-reverse', '2xl': 'column' },
  marginTop: { base: '0px', sm: '-85px', '2xl': 0 },
  marginLeft: { base: '0px', sm: '20px', '2xl': 0 }
});

export const movieDetailPlot = css({
  gridColumnStart: { base: 'start', sm: 'start', ['2xl']: 'start' },
  gridColumnEnd: { base: 'span end', sm: 'span end', ['2xl']: 'span col2' },
  gridRowStart: { base: 'row4', sm: 'row3', ['2xl']: 'row4' },
  gridRowEnd: { base: 'span row5', sm: 'span row4', ['2xl']: 'span end' },
  overflow: { base: 'hidden', ['2xl']: 'auto' }
});

export const movieDetailTitle = css({
  gridColumnStart: { base: 'col1', sm: 'col2' },
  gridColumnEnd: { base: 'span end' },
  gridRowStart: { base: 'row2', sm: 'start' },
  gridRowEnd: { base: 'span row3', sm: 'span row2' },
  margin: { base: 0, sm: '20px 20px', '2xl': '10px 20px' },
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { base: 'flex-start', '2xl': 'flex-end' }
});

export const movieDetailCast = css({
  gridColumnStart: { base: 'col1', sm: 'col1', ['2xl']: 'col2' },
  gridColumnEnd: { base: 'span end', sm: 'span end', ['2xl']: 'span end' },
  gridRowStart: { base: 'row5', sm: 'row4', ['2xl']: 'row2' },
  gridRowEnd: { base: 'span end', sm: 'span end', ['2xl']: 'span end' },
  overflow: { base: 'hidden', sm: 'auto' },
  paddingBottom: '30px',
  '& .imdb-movie-link': {
    marginLeft: { base: '0px', ['2xl']: '20px' },
    display: 'inline-block'
  }
});

export const movieVideos = css({
  margin: { base: '20px 0', '2xl': '20px' },
  padding: '20px',
  gap: '20px',
  backgroundColor: { base: '#00000011', _dark: '#ffffff11' },
  rounded: '10px',
  display: 'grid',
  gridTemplateColumns: {
    base: 'repeat(1, minmax(1fr, 1fr))',
    // sm: 'repeat(4, minmax(10%, 10%))',
    md: 'repeat(2, minmax(25%, 1fr))',
    xl: 'repeat(3, minmax(25%, 1fr))',
    '2xl': 'repeat(2, minmax(25%, 1fr))'
  }
});
