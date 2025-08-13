import { css } from '@styled-system/css';

export const filterTextField = css({
  display: 'flex',
  '& .textfield-container': {
    display: 'flex',
    alignItems: 'center',
    border: 'solid 1px #ffffff',
    padding: '0 3px',
    rounded: '5px',
    width: '100%',
    backgroundColor: '#ffffff22',
    '& [data-scope="field"][data-part="input"]': {
      outline: 'none',
      fontSize: '1rem',
      marginLeft: '5px'
    },
    '&.open': {
      width: '100%',
      animation: 'open 0.2s ease-in'
    },
    '&.closed': {
      '& [data-scope="field"][data-part="input"]': {
        opacity: 0,
        width: 0
      },
      width: '0%',
      border: 'transparent',
      backgroundColor: 'transparent'
    }
  }
});
