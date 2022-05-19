import { useState } from 'react';
import { useFormik } from 'formik';
import { updatePassword } from 'firebase/auth';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { auth } from '../../../firebase';
import { passwordValidation } from '../../../formValidation';
import { Card, FormField, SubmitButton } from '../../../components';
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
      {error ? (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      ) : null}
      <Box component="form" noValidate onSubmit={formik.handleSubmit}>
        <Stack
          spacing={2}
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="flex-start"
          sx={{ mb: 2 }}
        >
          {fields.map(field => (
            <FormField key={field.id} {...field} />
          ))}
        </Stack>
        <SubmitButton isLoading={isLoading}>Update Password</SubmitButton>
      </Box>
    </Card>
  );
};

export default ChangePassword;
