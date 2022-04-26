import { alpha } from '@mui/system';

const styleOverrides = theme => ({
  colorDefault: {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
});

const MuiAvatar = theme => ({
  styleOverrides: styleOverrides(theme),
});

export default MuiAvatar;
