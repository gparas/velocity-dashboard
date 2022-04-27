import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import { Title, Form, Footer } from '../components';
import Roles from './Roles';
import C from './constants';

const Register = () => {
  const [activeRole, setActiveRole] = useState(C.AVAILABLE_ROLES.ADMINISTRATOR);
  const { signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleChangeActiveRole = newRole => () => {
    setActiveRole(newRole);
  };

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
        title="Get started for free"
        subtitle="Free forever. No credit card needed."
      />
      <Roles
        activeRole={activeRole}
        onChangeActiveRole={handleChangeActiveRole}
      />
      <Form
        fields={C.FIELDS}
        onSubmit={handleSubmit}
        ctaLabel="Create Account"
      />
      <Footer page="register" />
    </>
  );
};

export default Register;
