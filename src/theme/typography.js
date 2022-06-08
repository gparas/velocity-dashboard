import U from './utils';

const base = {
  fontFamily: '"Rubik", sans-serif',
};

const variants = theme => {
  const fontSize = size => theme.typography.pxToRem(size);
  const fontFamily = base.fontFamily;
  return {
    h1: {
      fontFamily,
      fontSize: fontSize(48),
      lineHeight: 1.2,
      letterSpacing: '-0.6px',
    },
    h2: {
      fontFamily,
      fontSize: fontSize(34),
      lineHeight: U.round(42 / 34),
      letterSpacing: 0,
    },
    h3: {
      fontFamily,
      fontSize: fontSize(28),
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    h4: {
      fontFamily,
      fontSize: fontSize(18),
      lineHeight: 1.2,
      letterSpacing: 0,
      fontWeight: theme.typography.medium,
    },
    h5: undefined,
    h6: undefined,
    body1: {
      fontFamily,
      fontSize: fontSize(15),
      lineHeight: U.round(22 / 15),
      letterSpacing: 0,
    },
    body2: {
      fontFamily,
      fontSize: fontSize(13),
      lineHeight: U.round(19 / 13),
      letterSpacing: 0,
    },
    caption: {
      fontFamily,
      fontSize: fontSize(12),
      lineHeight: U.round(14 / 12),
      letterSpacing: '1.13px',
      textTransform: 'uppercase',
    },
    button: {
      fontFamily,
      fontSize: fontSize(15),
      lineHeight: 1,
      letterSpacing: 0,
      textTransform: 'none',
    },
    subtitle1: undefined,
    subtitle2: undefined,
    overline: undefined,
  };
};

const typography = theme => ({
  ...base,
  ...variants(theme),
});

export default typography;
