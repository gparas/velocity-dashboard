import { createTheme } from '@mui/material/styles';

import palette from './palette';
import typography from './typography';
import components from './components';

let theme = createTheme({
  palette,
});

theme = createTheme(theme, {
  typography: typography(theme),
  components: components(theme),
});

window.theme = theme;

export default theme;
