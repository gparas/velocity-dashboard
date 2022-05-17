import { useState } from 'react';
import { useFormik } from 'formik';
import { updateProfile } from 'firebase/auth';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import useAuth from '../../../hooks/useAuth';
import { generalInfoValidation } from '../../../formValidation';
import { Card, FormField, SubmitButton } from '../../../components';
import U from './utils';

const GeneralInfo = () => {
  const { user, uploadAvatar } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      avatar: '',
      email: user.email,
      fullName: user.displayName,
    },
    validationSchema: generalInfoValidation,
    onSubmit: values => {
      setIsLoading(true);
      uploadAvatar(values.avatar)
        .then(imgUrl => {
          updateProfile(user, {
            displayName: values.fullName,
            photoURL: imgUrl,
          });
        })
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
      <Box sx={{ mb: 3, width: 72 }}>
        <Avatar
          sx={{ width: 72, height: 72 }}
          src={avatarPreview || user?.photoURL}
        />
        <Link
          component="label"
          htmlFor="avatar"
          underline="hover"
          align="center"
          display="block"
          sx={[
            {
              '&:hover': {
                cursor: 'pointer',
              },
            },
            theme => ({
              fontSize: theme.typography.pxToRem(13),
            }),
          ]}
        >
          change
        </Link>
      </Box>
      <Box component="form" noValidate onSubmit={formik.handleSubmit}>
        <input
          name="avatar"
          accept=".jpg, .png"
          id="avatar"
          type="file"
          hidden
          onChange={event => {
            const [file] = event.target.files;
            if (file) {
              setAvatarPreview(URL.createObjectURL(file));
              formik.setFieldValue('avatar', file);
            }
          }}
        />
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
