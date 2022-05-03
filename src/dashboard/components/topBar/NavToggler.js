import React from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { toggleOpen } from '../../../store/navigation/navigationSlice';
import MenuIcon from '../../../icons/Menu';

const NavToggler = () => {
  const dispatch = useDispatch();
  return (
    <IconButton edge="start" onClick={() => dispatch(toggleOpen())}>
      <MenuIcon />
    </IconButton>
  );
};

export default NavToggler;
