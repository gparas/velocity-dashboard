import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import C from './constants';

const Footer = ({ page }) => {
  return (
    <Typography color="textSecondary" textAlign="center" sx={{ mt: 2 }}>
      {C.PAGES[page].text}{' '}
      <Link to={C.PAGES[page].linkUrl} component={RouterLink} underline="hover">
        {C.PAGES[page].linkText}
      </Link>
    </Typography>
  );
};

Footer.propTypes = {
  page: PropTypes.oneOf(['login', 'register']).isRequired,
};

export default Footer;
