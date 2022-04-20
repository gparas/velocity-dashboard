const mode = 'light';

const primary = {
  main: '#2E5BFF',
};

const secondary = {
  main: '#a1eba6',
};

const light = {
  text: {
    primary: '#2E384D',
    secondary: '#8798AD',
    disabled: '#B0BAC9',
  },
  background: {
    paper: '#fff',
    default: '#F4F6FC',
  },
};

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
  ...modes[mode],
};
