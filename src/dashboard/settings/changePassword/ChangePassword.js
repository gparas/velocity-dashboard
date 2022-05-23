import { useState } from 'react';
import { useFormik } from 'formik';
import { updatePassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { passwordValidation } from '../../../formValidation';
import { Card, Form } from '../../../components';
import U from './utils';

const ChangePassword = ({ handleOpenSnackbar }) => {
  const user = auth.currentUser;
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: passwordValidation,
    onSubmit: values => {
      setIsLoading(true);
      updatePassword(user, values.password)
        .then(() => {
          setIsLoading(false);
          handleOpenSnackbar();
        })
        .catch(error => {
          setError(error.code);
          setIsLoading(false);
        });
    },
  });
  const fields = U.getFormFields(formik);
  return (
    <Card title="Change password">
      <Form
        fields={fields}
        onSubmit={formik.handleSubmit}
        isLoading={isLoading}
        serverError={error}
        direction={{ xs: 'column', sm: 'row' }}
        submitButtonProps={{
          label: 'Update Password',
        }}
      />
    </Card>
  );
};

export default ChangePassword;
