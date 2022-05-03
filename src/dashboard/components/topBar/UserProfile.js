import React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import userAvatar from '../../../assets/avatar.jpeg';

const UserProfile = () => {
  return (
    <IconButton sx={{ p: 0 }}>
      <Avatar alt="avatar" src={userAvatar} />
    </IconButton>
  );
};

export default UserProfile;
