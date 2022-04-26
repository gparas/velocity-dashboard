import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Energy, Message } from '../icons';
import C from './constants';

const IconComponents = {
  [C.AVAILABLE_ROLES.ADMINISTRATOR]: Energy,
  [C.AVAILABLE_ROLES.OPERATOR]: Message,
};

const Roles = () => {
  return (
    <Grid container spacing={2.5}>
      {C.ROLES.map(({ title, text }) => {
        const IconComponent = IconComponents[title];
        return (
          <Grid item key={title} xs={6}>
            <Paper variant="outlined" sx={{ padding: '20px 8px' }}>
              <Avatar sx={{ width: 48, height: 48, margin: '0 auto 16px' }}>
                <IconComponent fontSize="small" />
              </Avatar>
              <Typography align="center" paragraph>
                <b>{title}</b>
              </Typography>
              <Typography color="textSecondary" align="center">
                {text}
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Roles;
