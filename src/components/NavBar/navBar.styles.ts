import { css } from '@styled-system/css';

export const navBar = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  backgroundColor: 'secondaryBackground',
  color: '#ffffff',
  height: { base: '50px', xl: '90px' },
  padding: { base: '5px', xl: '10px 10px 5px 10px' },
  zIndex: 100
});

export const navMainNav = css({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: { base: 'center', xl: 'flex-start' },
  flexDirection: { base: 'row', xl: 'column' }
});

export const navSecondaryNav = css({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: { base: 'row-reverse', xl: 'column' },
  alignItems: { base: 'center', xl: 'flex-end' }
});

export const filmotekTitle = css({
  fontSize: '1.5rem',
  border: 'solid 1px',
  borderColor: '#ffffff',
  rounded: '10px',
  padding: '0px 10px',
  marginLeft: '10px',
  '& .filmo': {
    fontWeight: '300'
  },
  '& .tek': {
    fontWeight: '600'
  }
});

export const filters = css({
  display: 'flex',
  gap: '10px',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: '1rem'
});
