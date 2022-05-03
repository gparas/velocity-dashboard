import React from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { toggleOpen } from '../../../store/navigation/navigationSlice';
import MenuIcon from '../../../icons/Menu';

const NavToggler = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', px: 1, mr: 1.5 }}>
      <IconButton onClick={() => dispatch(toggleOpen())}>
        <MenuIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default NavToggler;
