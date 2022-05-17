import { useState } from 'react';
import { useFormik } from 'formik';
import { updateProfile } from 'firebase/auth';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useAuth from '../../../hooks/useAuth';
import { generalInfoValidation } from '../../../formValidation';
import { Card, FormField, SubmitButton } from '../../../components';
import U from './utils';

const GeneralInfo = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: user.email,
      fullName: user.displayName,
    },
    validationSchema: generalInfoValidation,
    onSubmit: values => {
      setIsLoading(true);
      updateProfile(user, { displayName: values.fullName })
        .then(() => {
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
        });
    },
  });
  const fields = U.getFormFields(formik);
  return (
    <Card title="General Info">
      <Box component="form" noValidate onSubmit={formik.handleSubmit}>
        <Stack
          spacing={2}
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="flex-end"
          sx={{ mb: 2 }}
        >
          {fields.map(field => (
            <FormField key={field.id} {...field} />
          ))}
        </Stack>
        <SubmitButton isLoading={isLoading}>Update Info</SubmitButton>
      </Box>
    </Card>
  );
};

export default GeneralInfo;
