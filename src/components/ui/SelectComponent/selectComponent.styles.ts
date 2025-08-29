import { css } from '@styled-system/css';

export const selectComponent = css({
  '& [data-scope="select"]': {
    fontSize: '0.9rem',
    fontWeight: '400',
    '&[data-part="trigger"]': {
      rounded: '5px',
      padding: '3px 5px',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      backgroundColor: '{secondaryBackgroundOver}'
    }
  }
});
