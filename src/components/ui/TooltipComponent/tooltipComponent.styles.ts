import { css } from '@styled-system/css';

export const tooltip = css({
  '& [data-scope="tooltip"][data-part="content"]': {
    backgroundColor: {
      base: '#382629ff',
      _dark: '#c2c4b9'
    },
    color: 'negativeText',
    padding: '10px',
    rounded: '10px',
    zIndex: '10000',
    fontSize: '14px',
    fontWeight: '500',
    boxShadow: {
      base: 'rgba(0, 0, 0, 0.5) 2px 2px 7px 1px',
      _dark: 'rgba(0, 0, 0, 1) 1px 1px 15px 2px'
    },
    border: 'solid 1px',
    borderColor: '{background}'
  },
  '& [data-scope=tooltip][data-part=content][data-state=open]': {
    animation: 'fadein 0.3s ease-in'
  },
  '& [data-scope=tooltip][data-part=content][data-state=closed]': {
    animation: 'fadeout 0.3s ease-out'
  },
  '& [data-scope="tooltip"][data-part="arrow"]': {
    '--arrow-size': '16px',
    width: 'var(--arrow-size)',
    height: 'var(--arrow-size)',
    rotate: '45deg',
    borderColor: '{background}',
    backgroundColor: {
      base: '#382629ff',
      _dark: '#c2c4b9'
    }
  },
  '& [data-scope="tooltip"][data-placement="top"]': {
    '& [data-scope="tooltip"][data-part="arrow"]': {
      borderBottom: 'solid 1px',
      borderRight: 'solid 1px'
    }
  },
  '& [data-scope="tooltip"][data-placement="bottom"]': {
    '& [data-scope="tooltip"][data-part="arrow"]': {
      borderTop: 'solid 1px',
      borderLeft: 'solid 1px'
    }
  },
  '& [data-scope="tooltip"][data-placement="left"]': {
    '& [data-scope="tooltip"][data-part="arrow"]': {
      borderTop: 'solid 1px',
      borderRight: 'solid 1px'
    }
  },
  '& [data-scope="tooltip"][data-placement="right"]': {
    '& [data-scope="tooltip"][data-part="arrow"]': {
      borderLeft: 'solid 1px',
      borderBottom: 'solid 1px'
    }
  }
});
