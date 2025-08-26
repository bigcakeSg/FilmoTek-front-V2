import { css, cva } from '@styled-system/css';

export const directorsWriters = css({
  fontSize: '1rem',
  margin: { base: '20px 0', '2xl': '20px 0 20px 20px' }
});

export const castLabel = css({
  fontWeight: '700'
});

export const principalCast = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  margin: { base: '20px 0', '2xl': '20px 0 20px 20px' }
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
    },
    _hover: {
      '& .actor-picture': {
        transform: 'scale(1.05)',
        transition: 'transform 0.2s ease-in-out'
      }
    }
  },
  variants: {
    type: {
      principal: {
        flexDirection: 'column',
        width: '200px',
        '& .actor-picture': {
          width: '200px',
          minHeight: '250px',
          border: '3px solid #000000'
        }
      },
      extended: {
        flexDirection: 'row',
        width: '300px',
        height: '125px',
        '& .actor-picture': {
          minWidth: '100px',
          height: '125px',
          border: '3px solid #000000'
        }
      }
    }
  }
});

export const nameStyle = css({
  _hover: {
    textDecoration: 'dotted underline'
  }
});

export const crewStyle = css({
  '& [data-scope="collapsible"]': {
    '&[data-part="trigger"]': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      flexDirection: 'row-reverse',
      width: '150px',
      '&[data-state="closed"] .less': {
        display: 'none'
      },
      '&[data-state="open"] .more': {
        display: 'none'
      }
    },
    '&[data-part="indicator"]': {
      marginTop: '4px',
      '&[data-state="open"]': {
        transform: 'rotate(180deg)'
      }
    },
    '&[data-part="content"]': {
      overflow: 'hidden',
      marginLeft: '8px',
      paddingLeft: '5px',
      borderLeft: 'solid 1px',
      '&[data-state="open"]': {
        animation: 'slideDown 250ms'
      },
      '&[data-state="closed"]': {
        animation: 'slideUp 250ms'
      }
    }
  }
});
