import { css } from '@styled-system/css';

export const navBar = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'secondaryBackground',
  color: '#ffffff',
  height: { base: '50px', xl: '90px' },
  padding: '0 10px'
});

export const navMainNav = css({
  display: 'flex',
  alignItems: { base: 'center', xl: 'start' },
  flexDirection: { base: 'row', xl: 'column' },
  gap: '5px'
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

export const navButtons = css({
  display: 'flex',
  alignItems: 'center',
  gap: '5px'
});

export const configTools = css({
  //
});
