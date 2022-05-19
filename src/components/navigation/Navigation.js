import React from 'react';
import { useSelector } from 'react-redux';
import Toolbar from '@mui/material/Toolbar';
import Fade from '@mui/material/Fade';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { selectors } from '../../store/navigation';
import routes from '../../routes';
import Drawer from './Drawer';
import Link from './Link';
import UserAvatar from '../userAvatar';
import { auth } from '../../firebase';

const Navigation = () => {
  const user = auth.currentUser;
  const isOpen = useSelector(selectors.getNavigationIsOpen);
  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      PaperProps={{
        sx: { border: 0 },
      }}
    >
      <Toolbar />
      <List component="div">
        <Fade in={isOpen}>
          <ListItem component="div" sx={{ my: 3 }}>
            <ListItemAvatar>
              <UserAvatar variant="rounded" />
            </ListItemAvatar>
            <ListItemText
              primary="Welcome"
              secondary={user.displayName}
              secondaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
        </Fade>
        {routes
          .filter(route => route.path === '/')[0]
          .children.map(({ icon, text, path }) => {
            return (
              <Link key={text} to={path || '/'}>
                <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </Link>
            );
          })}
      </List>
    </Drawer>
  );
};

export default Navigation;
