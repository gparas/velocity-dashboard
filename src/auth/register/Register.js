import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { registerValidation } from '../../formValidation';
import Form from '../../components/form';
import Title from '../title';
import Footer from '../footer';
import Roles from './Roles';
import C from './constants';
import U from './utils';

const Register = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState(C.AVAILABLE_ROLES.ADMINISTRATOR);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeRole = newRole => () => {
    setRole(newRole);
  };

  const from = location.state?.from?.pathname || '/';

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: registerValidation,
    onSubmit: values => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(userCredential => {
          const user = userCredential.user;
          updateProfile(user, { displayName: values.fullName });
        })
        .then(() => {
          setIsLoading(false);
          navigate(from, { replace: true });
        })
        .catch(error => {
          setIsLoading(false);
          setError(error.code);
        });
    },
  });

  return (
    <>
      <Title
        title="Get started for free"
        subtitle="Free forever. No credit card needed."
      />
      <Roles activeRole={role} onChangeActiveRole={handleChangeRole} />
      <Form
        fields={U.getFormFields(formik)}
        serverError={error}
        isLoading={isLoading}
        onSubmit={formik.handleSubmit}
        submitButtonProps={{
          label: 'Create Account',
          size: 'large',
          fullWidth: true,
        }}
      />
      <Footer page="register" />
    </>
  );
};

export default Register;
