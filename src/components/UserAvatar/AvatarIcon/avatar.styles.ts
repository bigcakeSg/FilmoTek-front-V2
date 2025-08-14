import { css } from '@styled-system/css';

export const avatar = css({
  '& [data-scope="avatar"]': {
    '&[data-part="root"]': {
      width: { base: '30px', xl: '40px' },
      height: { base: '30px', xl: '40px' },
      rounded: 'full',
      overflow: 'hidden'
    },
    '&[data-part="image"]': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'inherit'
    },
    '&[data-part="fallback"]': {
      width: '100%',
      height: '100%',
      backgroundColor: '#cccccc',
      borderRadius: 'inherit'
    }
  }
});
