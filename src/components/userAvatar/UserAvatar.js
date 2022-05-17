import React from 'react';
import Avatar from '@mui/material/Avatar';
import useAuth from '../../hooks/useAuth';

const UserAvatar = ({ ...other }) => {
  const { user } = useAuth();
  const displayName = user.displayName;
  return (
    <Avatar alt={displayName} src={user.photoURL} {...other}>
      {displayName.charAt(0)}
    </Avatar>
  );
};

export default UserAvatar;
