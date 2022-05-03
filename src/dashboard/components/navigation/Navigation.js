import React from 'react';
import { useSelector } from 'react-redux';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { selectors } from '../../../store/navigation';
import routes from '../../routes';
import Drawer from './Drawer';
import Link from './Link';

const Navigation = () => {
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
      <List>
        {routes[0].children.map(({ icon, text, path }) => {
          return (
            <Link key={text} to={path || '/'}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Navigation;
