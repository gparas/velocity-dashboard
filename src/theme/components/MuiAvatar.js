import { alpha } from '@mui/system';

const styleOverrides = {
  colorDefault: ({ theme }) => ({
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  }),
};

export default { styleOverrides };
