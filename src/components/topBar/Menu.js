import { Link as RouterLink } from 'react-router-dom';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Settings as SettingsIcon, Logout as LogoutIcon } from '../../icons';
import useAuth from '../../hooks/useAuth';

const Menu = ({ ...other }) => {
  const { logout } = useAuth();
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
      <MenuItem onClick={() => logout()}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </MuiMenu>
  );
};

export default Menu;
