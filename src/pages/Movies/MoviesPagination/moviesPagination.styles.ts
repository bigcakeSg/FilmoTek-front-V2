import { css } from '@styled-system/css';

export const pagination = css({
  marginBottom: '{sizes.footer}',
  display: 'flex',
  justifyContent: 'center',
  gap: { base: 0, sm: '40px' },
  flexDirection: { base: 'column', sm: 'row' },
  alignItems: 'center',
  paddingBottom: { base: '5px', sm: 0 },
  '& [data-scope="pagination"]': {
    fontSize: '1rem',
    height: '40px',
    color: {
      base: 'contrast.secondaryLight',
      _dark: 'contrast.secondaryUltraLight'
    },
    '&[data-part="root"]': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px'
    },
    '&[data-part="item"]': {
      width: '28px',
      '&[data-selected]': {
        backgroundColor: '{hover}',
        fontWeight: '700',
        color: {
          base: 'contrast.secondaryLight',
          _dark: '#ffffff'
        }
      }
    },
    '&[data-part="prev-trigger"][data-disabled], [data-part="next-trigger"][data-disabled]':
      {
        cursor: 'not-allowed',
        opacity: 0.4
      },
    '&[data-part="prev-trigger"], [data-part="next-trigger"], [data-part="item"]':
      {
        height: '28px',
        paddingInline: '6px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: '400',
        _hover: {
          backgroundColor: {
            base: 'contrast.secondaryUltraLight',
            _dark: 'contrast.secondaryLight'
          }
        }
      }
  }
});

export const paginationSelect = css({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  '& > span': {
    fontWeight: '500',
    fontSize: '0.9rem'
  }
});
