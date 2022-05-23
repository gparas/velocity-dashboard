import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { loginValidation } from '../../formValidation';
import Form from '../../components/form';
import Title from '../title';
import Footer from '../footer';
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
        serverError={error}
        isLoading={isLoading}
        onSubmit={formik.handleSubmit}
        submitButtonProps={{
          label: 'Sign In',
          size: 'large',
          fullWidth: true,
        }}
      />
      <Footer page="login" />
    </>
  );
};

export default Login;
