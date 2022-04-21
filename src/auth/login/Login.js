import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../components/title';
import { useAuth } from '../../context/auth-context';

const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('email');
    signin(username, () => {
      navigate(from, { replace: true });
    });
  };
  return (
    <>
      <Title
        title="Sign in to Velocity"
        subtitle="Please enter your credentials to proceed."
      />
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
          sx={{ mt: 2, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
      <Typography color="textSecondary" textAlign="center">
        Don't have an accoun?{' '}
        <Link to="/auth/register" component={RouterLink} underline="hover">
          Sign up
        </Link>
      </Typography>
    </>
  );
};

export default Login;
