import React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import userAvatar from '../../assets/avatar.jpeg';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {
  const { signOut } = useAuth();
  return (
    <IconButton sx={{ p: 0 }} onClick={() => signOut()}>
      <Avatar alt="avatar" src={userAvatar} />
    </IconButton>
  );
};

export default UserProfile;
