import { createTheme } from '@mui/material/styles';

import palette from './palette';
import typography from './typography';

let theme = createTheme({
  palette,
});

theme = createTheme(theme, {
  typography: typography(theme),
});

window.theme = theme;

export default theme;
