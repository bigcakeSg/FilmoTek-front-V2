import { css } from '@styled-system/css';

export const keyFiguresContainer = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  gap: '20px',
  marginBottom: '50px',
  flexWrap: 'wrap'
});

export const keyFigureBox = css({
  backgroundColor: '{hover}',
  padding: '30px',
  borderRadius: '10px',
  '& .box-label': {
    display: 'inline-block',
    fontSize: '1.2rem',
    fontWeight: '700',
    backgroundColor: '{background}',
    rounded: '5px',
    padding: '5px 10px'
  },
  '& .box-value': {
    color: '#ffffff',
    textShadow: '1px 1px 2px #000000',
    textAlign: 'right',
    fontSize: '3rem',
    fontWeight: '700',
    lineHeight: '3rem',
    '& span': {
      fontSize: '1.5rem',
      fontWeight: '500'
    }
  },
  '& .box-second-value': {
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight: '300',
    textAlign: 'right'
  }
});
