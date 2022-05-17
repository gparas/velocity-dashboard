import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import UserAvatar from '../userAvatar';
import Menu from './Menu';

const UserProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton sx={{ p: 0 }} onClick={handleClick}>
        <UserAvatar />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
      />
    </>
  );
};

export default UserProfile;
