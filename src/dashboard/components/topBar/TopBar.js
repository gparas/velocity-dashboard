import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Notification from './Notification';
import Message from './Message';
import Brand from './Brand';
import UserProfile from './UserProfile';
import NavToggler from './NavToggler';

const TopBar = () => {
  return (
    <AppBar elevation={0} color="inherit">
      <Toolbar>
        <NavToggler />
        <Container
          disableGutters
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Brand />
          <Notification />
          <Message />
          <UserProfile />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
