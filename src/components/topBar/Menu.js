import { Link as RouterLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Settings as SettingsIcon, Logout as LogoutIcon } from '../../icons';
import { auth } from '../../firebase';

const Menu = ({ ...other }) => {
  return (
    <MuiMenu
      id="account-menu"
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      {...other}
    >
      <MenuItem component={RouterLink} to="/settings">
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={() => signOut(auth)}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </MuiMenu>
  );
};

export default Menu;
