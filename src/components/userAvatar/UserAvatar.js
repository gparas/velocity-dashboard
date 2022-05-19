import React from 'react';
import Avatar from '@mui/material/Avatar';
import { auth } from '../../firebase';

const UserAvatar = ({ ...other }) => {
  const user = auth.currentUser;
  const { displayName, photoURL } = user;
  return <Avatar alt={displayName} src={photoURL} {...other} />;
};

export default UserAvatar;
