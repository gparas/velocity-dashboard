import React from 'react';
import Avatar from '@mui/material/Avatar';
import useAuth from '../../hooks/useAuth';

const UserAvatar = ({ ...other }) => {
  const { user } = useAuth();
  const { displayName, photoURL } = user;
  return <Avatar alt={displayName} src={photoURL} {...other} />;
};

export default UserAvatar;
