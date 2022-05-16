import { alpha } from '@mui/system';
const mode = 'light';

const primary = {
  main: '#2E5BFF',
};

const secondary = {
  main: '#8C54FF',
};

const tertiary = {
  main: '#00C1D4',
};

const warning = {
  main: '#F7C137',
};

const error = {
  main: '#D63649',
};

const success = {
  main: '#33AC2E',
};

const light = {
  text: {
    primary: '#2E384D',
    secondary: '#8798AD',
    disabled: '#B0BAC9',
  },
  divider: '#E0E7FF',
  action: {
    active: '#8798AD',
  },
  background: {
    paper: '#fff',
    default: '#F4F6FC',
  },
};

const charts = [
  primary.main,
  alpha(primary.main, 0.65),
  secondary.main,
  alpha(secondary.main, 0.65),
  tertiary.main,
  alpha(tertiary.main, 0.7),
  warning.main,
];

const dark = {
  background: {
    paper: '#212624',
    default: '#161b1a',
  },
};

const modes = {
  dark,
  light,
};

export default {
  mode,
  primary,
  secondary,
  success,
  error,
  warning,
  charts,
  ...modes[mode],
};
