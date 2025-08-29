export const selectGlobalStyles = {
  '& [data-scope="select"]': {
    '&[data-part="content"]': {
      backgroundColor: '{secondaryBackgroundOver}',
      rounded: '10px',
      padding: '5px',
      boxShadow: '2px 2px 7px 1px #00000044',
      zIndex: '50',
      minWidth: '100px',
      '&[data-state=open]': {
        animation: 'fadein 0.2s ease-in'
      },
      '&[data-state=closed]': {
        animation: 'fadeout 0.2s ease-out'
      }
    },
    '&[data-part="item"]': {
      cursor: 'pointer',
      padding: '2px 5px',
      margin: '2px 0',
      rounded: '10px',
      fontSize: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      _hover: {
        backgroundColor: '#ffffff22'
      },
      '&[data-state="checked"]': {
        backgroundColor: '#ffffff22',
        fontWeight: '500'
      }
    }
  }
};
