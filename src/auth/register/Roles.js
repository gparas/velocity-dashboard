import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Energy, Chat } from '../../icons';
import CheckIcon from './CheckIcon';
import C from './constants';

const IconComponents = {
  [C.AVAILABLE_ROLES.ADMINISTRATOR]: Energy,
  [C.AVAILABLE_ROLES.OPERATOR]: Chat,
};

const Roles = ({ activeRole, onChangeActiveRole }) => {
  return (
    <Grid container spacing={2.5} sx={{ mb: 3 }}>
      {C.ROLES.map(({ title, text }) => {
        const IconComponent = IconComponents[title];
        const active = activeRole === title;
        return (
          <Grid item key={title} xs={6}>
            <Card
              variant="outlined"
              sx={{
                borderColor: active ? 'primary.main' : 'divider',
                position: 'relative',
                overflow: 'visible',
              }}
            >
              <CheckIcon active={active} />
              <CardActionArea onClick={onChangeActiveRole(title)}>
                <CardContent
                  sx={{
                    padding: '20px 8px',
                  }}
                >
                  <Avatar sx={{ width: 48, height: 48, margin: '0 auto 16px' }}>
                    <IconComponent fontSize="small" />
                  </Avatar>
                  <Typography align="center" paragraph>
                    <b>{title}</b>
                  </Typography>
                  <Typography color="textSecondary" align="center">
                    {text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Roles;
