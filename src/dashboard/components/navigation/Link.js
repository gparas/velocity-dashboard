import React from 'react';
import {
  Link as RouterLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';

const Link = ({ to, children, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const selected = Boolean(match);
  return (
    <ListItemButton
      to={to}
      component={RouterLink}
      selected={selected}
      sx={{
        borderLeftWidth: 3,
        borderLeftStyle: 'solid',
        borderLeftColor: selected ? 'primary.main' : 'transparent',
        color: selected ? 'primary.main' : 'text.secondary',
      }}
      {...props}
    >
      {children}
    </ListItemButton>
  );
};

export default Link;
