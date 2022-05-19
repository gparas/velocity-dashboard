import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Title, Form, Footer } from '../components';
import { auth } from '../../firebase';
import { loginValidation } from '../../formValidation';
import U from './utils';

const Login = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidation,
    onSubmit: values => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(() => {
          setIsLoading(false);
          navigate(from, { replace: true });
        })
        .catch(error => {
          setError(error.code);
          setIsLoading(false);
        });
    },
  });

  const from = location.state?.from?.pathname || '/';

  return (
    <>
      <Title
        title="Sign in to Velocity"
        subtitle="Please enter your credentials to proceed."
      />
      <Form
        fields={U.getFormFields(formik)}
        ctaLabel="Sign In"
        error={error}
        isLoading={isLoading}
        onSubmit={formik.handleSubmit}
      />
      <Footer page="login" />
    </>
  );
};

export default Login;
