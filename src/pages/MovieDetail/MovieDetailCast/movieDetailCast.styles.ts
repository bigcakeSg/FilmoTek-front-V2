import { css, cva } from '@styled-system/css';

export const directorsWriters = css({
  fontSize: '1rem',
  margin: '20px 0 20px 20px'
});

export const castLabel = css({
  fontWeight: '700'
});

export const principalCast = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  margin: '20px 0 20px 20px'
});

export const extendedCast = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  margin: '40px 0 20px 20px'
});

export const actorTile = cva({
  base: {
    fontSize: '1rem',
    fontWeight: '300',
    display: 'flex',
    textAlign: 'left',
    gap: '10px',
    '& .actor-name': {
      fontWeight: '700'
    },
    '& .actor-picture': {
      position: 'relative',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  },
  variants: {
    type: {
      principal: {
        flexDirection: 'column',
        '& .actor-picture': {
          width: '200px',
          height: '250px',
          border: '3px solid #000000'
        }
      },
      extended: {
        flexDirection: 'row',
        width: '300px',
        '& .actor-picture': {
          width: '100px',
          height: '125px',
          border: '3px solid #000000'
        }
      }
    }
  }
});
