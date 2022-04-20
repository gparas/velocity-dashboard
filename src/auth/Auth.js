import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Login from './login';

const Auth = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={7} md={6} component={Paper} elevation={0}>
        <Box
          sx={{
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            maxWidth: 320,
            height: '100%',
          }}
        >
          <Login />
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
