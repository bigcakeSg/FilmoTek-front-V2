import { css } from '@styled-system/css';

export const checkBox = css({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  gap: '5px',
  '& [data-scope="checkbox"]': {
    '&[data-part="label"]': {
      fontWeight: '500'
    },
    '&[data-part="control"]': {
      rounded: '5px',
      width: '16px',
      height: '16px',
      border: '1px solid',
      borderColor: '{foreground}',
      backgroundColor: '#ffffff11'
    }
  }
});
