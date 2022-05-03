import React from 'react';
import {
  Link as RouterLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';

const Link = ({ to, children, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log(match);
  return (
    <ListItemButton component={RouterLink} to={to} selected={match} {...props}>
      {children}
    </ListItemButton>
  );
};

export default Link;
