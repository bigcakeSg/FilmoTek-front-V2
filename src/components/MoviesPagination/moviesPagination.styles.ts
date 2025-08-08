import { css } from '@styled-system/css';

export const pagination = css({
  '& [data-scope="pagination"]': {
    '&[data-part="root"]': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px'
    },
    '&[data-part="item"][data-selected]': {
      backgroundColor: '{hover}'
    },
    '&[data-part="prev-trigger"][data-disabled], [data-part="next-trigger"][data-disabled]':
      {
        cursor: 'not-allowed',
        opacity: 0.4
      },
    '&[data-part="prev-trigger"], [data-part="next-trigger"], [data-part="item"]':
      {
        minWidth: '24px',
        minHeight: '24px',
        paddingInline: '6px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        border: '1px solid #ccc',
        color: 'inherit',
        textDecoration: 'none',
        fontWeight: '500'
      }
  }
});
