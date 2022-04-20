import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth } from '../../context/auth-context';

const Login = () => {
  const { signin } = useAuth();
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signin(data.get('email'));
  };
  return (
    <div>
      <Typography variant="h2" component="h1">
        Sign in to Velocity
      </Typography>
      <Typography color="textSecondary" sx={{ mb: 5 }}>
        Please enter your credentials to proceed.
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
      <Typography color="textSecondary" textAlign="center">
        Don't have an accoun
      </Typography>
    </div>
  );
};

export default Login;
