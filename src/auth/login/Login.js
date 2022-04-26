import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import { Title, Form, Footer } from '../components';
import C from './constants';

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
      <Form fields={C.FIELDS} onSubmit={handleSubmit} ctaLabel="Sign In" />
      <Footer page="login" />
    </>
  );
};

export default Login;
