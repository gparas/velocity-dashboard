import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Brand = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ButtonBase component={RouterLink} to="/">
        <Logo />
      </ButtonBase>
    </Box>
  );
};

export default Brand;
