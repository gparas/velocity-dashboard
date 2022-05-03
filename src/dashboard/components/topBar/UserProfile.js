import React from 'react';
import Avatar from '@mui/material/Avatar';
import userAvatar from '../../../assets/avatar.jpeg';

const UserProfile = () => {
  return <Avatar alt="avatar" src={userAvatar} />;
};

export default UserProfile;
