import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleOpen } from '../../../store/navigation/navigationSlice';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Message, Notification, Menu as MenuIcon } from '../../../icons';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import userAvatar from '../../../assets/avatar.jpeg';

const TopBar = () => {
  const dispatch = useDispatch();

  return (
    <AppBar elevation={0} color="inherit">
      <Toolbar>
        <IconButton edge="start" onClick={() => dispatch(toggleOpen())}>
          <MenuIcon />
        </IconButton>
        <Container
          disableGutters
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <ButtonBase component={RouterLink} to="/">
              <Logo />
            </ButtonBase>
          </Box>
          <IconButton>
            <Notification />
          </IconButton>
          <IconButton sx={{ mx: 2 }}>
            <Message />
          </IconButton>
          <Avatar alt="avatar" src={userAvatar} />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
