import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Auth = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={7} md={6} component={Paper} elevation={0}>
        <Box mx="auto" p={6} sx={{ maxWidth: 416 }}>
          <Logo style={{ marginBottom: 48 }} />
          <Outlet />
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={5}
        md={6}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
};

export default Auth;
