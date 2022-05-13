import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Title, Form, Footer } from '../components';
import Roles from './Roles';
import C from './constants';

const Register = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState(C.AVAILABLE_ROLES.ADMINISTRATOR);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChangeRole = newRole => () => {
    setRole(newRole);
  };

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const fullName = formData.get('fullName');
    const password = formData.get('password');

    setIsLoading(true);
    register(email, password, fullName, role)
      .then(() => {
        setIsLoading(false);
        navigate(from, { replace: true });
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        setError(error.code);
      });
  };
  return (
    <>
      <Title
        title="Get started for free"
        subtitle="Free forever. No credit card needed."
      />
      <Roles activeRole={role} onChangeActiveRole={handleChangeRole} />
      <Form
        fields={C.FIELDS}
        ctaLabel="Create Account"
        error={error}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
      <Footer page="register" />
    </>
  );
};

export default Register;
