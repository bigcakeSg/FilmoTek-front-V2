import { css } from '@styled-system/css';

export const originalTitleStyles = css({
  fontWeight: 700,
  fontSize: { base: '1.3rem', md: '1.7rem', lg: '1.9rem' },
  marginLeft: '-25px',
  paddingLeft: '25px',
  background: {
    // TODO: faire couleurs dans le theme
    base: 'linear-gradient(90deg, #2a3943ff 0%, #2a3943ff 50%, #2a394300 100%)',
    _dark: 'linear-gradient(90deg, #353532ff 0%, #353532ff 50%, #35353200 100%)'
  }
});

export const frenchTitleStyles = css({
  fontWeight: 300,
  fontStyle: 'italic',
  fontSize: { base: '1.2rem', md: '1.4rem', lg: '1.5rem' },
  textShadow: '1px 1px 2px #000'
});

export const releaseInfoStyles = css({
  fontSize: { base: '1.2rem', md: '1.5rem' },
  marginTop: { base: '20px', xl: '15px', '2xl': '50px' },
  display: 'flex',
  alignItems: 'baseline',
  flexDirection: 'row',
  textShadow: '1px 1px 2px #000'
});

export const relesaeDateStyles = css({
  fontWeight: 500,
  paddingRight: '20px'
});

export const durationStyles = css({
  fontWeight: 300,
  fontSize: { base: '1.1rem', md: '1.3rem' },
  borderLeft: 'solid 1px #eee',
  paddingLeft: '20px',
  paddingRight: '20px',
  '&.countries': {
    borderRight: 'solid 1px #eee'
  }
});

export const countriesStyles = css({
  fontWeight: 300,
  fontSize: { base: '0.9rem', md: '1rem' },
  paddingLeft: '20px'
});

export const companiesStyles = css({
  display: 'flex',
  fontWeight: 300,
  fontSize: { base: '0.9rem', md: '1rem' },
  textShadow: '1px 1px 2px #000',
  fontStyle: 'italic'
});
