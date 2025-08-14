import { css } from '@styled-system/css';

export const fieldText = css({
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
  '& [data-part="label"]': {
    fontWeight: '500'
  },
  '& [data-part="input"]': {
    border: '1px solid',
    borderColor: '{foreground}',
    rounded: '5px',
    padding: '3px',
    backgroundColor: { base: '#00000011', _dark: '#ffffff11' },
    width: '100%',
    fontWeight: '300',
    '&[data-invalid]': {
      borderColor: '{red}'
    }
  },
  '& [data-scope="password-input"][data-part="input"]': {
    paddingRight: '25px'
  },
  '& [data-part="control"]': {
    position: 'relative'
  },
  '& [data-part="indicator"]': {
    position: 'absolute',
    top: '8px',
    right: '5px'
  },
  '& [data-part="error-text"]': {
    fontWeight: '300',
    color: '{red}'
  }
});
