import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Title, Form, Footer } from '../components';
import useAuth from '../../hooks/useAuth';
import C from './constants';

const Login = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    setIsLoading(true);
    signin(email, password)
      .then(() => {
        setIsLoading(false);
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.code);
        setIsLoading(false);
      });
  };
  return (
    <>
      <Title
        title="Sign in to Velocity"
        subtitle="Please enter your credentials to proceed."
      />
      <Form
        fields={C.FIELDS}
        ctaLabel="Sign In"
        error={error}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
      <Footer page="login" />
    </>
  );
};

export default Login;
