import { cva } from '@styled-system/css';

export const loginButton = cva({
  base: {
    border: 'solid 1px',
    rounded: '5px',
    padding: '3px',
    fontWeight: '500'
  },
  variants: {
    type: {
      principal: {
        color: '{foreground}',
        backgroundColor: { base: '#00000011', _dark: '#ffffff11' },
        _hover: { backgroundColor: { base: '#00000022', _dark: '#ffffff22' } }
      },
      secondary: {
        color: '{background}',
        backgroundColor: { base: '#00000099', _dark: '#ffffff99' },
        _hover: { backgroundColor: { base: '#000000bb', _dark: '#ffffffbb' } }
      }
    }
  }
});
