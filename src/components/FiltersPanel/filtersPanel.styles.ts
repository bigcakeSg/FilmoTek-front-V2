import { css } from '@styled-system/css';

export const filtersPanel = css({
  display: 'flex',
  padding: '10px 0 20px 0',
  justifyContent: 'space-between',
  flexDirection: 'column',
  flex: 1,
  fontSize: '0.9rem'
});

export const filters = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
});

export const groupFilters = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px'
});

export const collectionsTitles = css({
  fontSize: '1rem',
  fontWeight: '700',
  borderBottom: '1px solid'
});

export const collectionsForm = css({
  display: 'flex',
  gap: '50px'
});

export const filtersButtons = css({
  display: 'flex',
  justifyContent: 'space-between',
  '& > div': {
    display: 'flex',
    gap: '10px'
  }
});

export const supportsFilters = css({
  display: 'flex',
  alignItems: 'center',
  gap: '40px'
});
