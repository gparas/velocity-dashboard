import { useState } from 'react';
import { useFormik } from 'formik';
import { updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { auth, storage } from '../../../firebase';
import { generalInfoValidation } from '../../../formValidation';
import { Card, Form } from '../../../components';
import Label from './Label';
import U from './utils';

const GeneralInfo = ({ handleOpenSnackbar }) => {
  const user = auth.currentUser;
  const [isLoading, setIsLoading] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const updateUserProfile = async values => {
    let photoURL = '';
    if (!avatarPreview) {
      photoURL = user.photoURL;
    } else {
      const uploadPath = `users/${user.uid}/avatar`;
      const storageRef = ref(storage, uploadPath);
      const img = await uploadBytes(storageRef, values.avatar);
      photoURL = await getDownloadURL(img.ref);
    }
    return updateProfile(user, {
      displayName: values.fullName,
      photoURL: photoURL,
    });
  };

  const formik = useFormik({
    initialValues: {
      avatar: user.photoURL,
      email: user.email,
      fullName: user.displayName,
    },
    validationSchema: generalInfoValidation,
    onSubmit: values => {
      setIsLoading(true);
      updateUserProfile(values)
        .then(() => {
          setIsLoading(false);
          handleOpenSnackbar();
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
        });
    },
  });
  const handleFileUpload = event => {
    const [file] = event.target.files;
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      formik.setFieldValue('avatar', file);
    }
  };
  const fields = U.getFormFields(formik, handleFileUpload);
  return (
    <Card title="General Info">
      <Box sx={{ mb: 3, width: 72 }}>
        <Avatar
          sx={{ width: 72, height: 72 }}
          src={avatarPreview || user.photoURL}
        />
        <Label htmlFor="avatar" />
      </Box>
      <Form
        fields={fields}
        onSubmit={formik.handleSubmit}
        isLoading={isLoading}
        direction={{ xs: 'column', sm: 'row' }}
        submitButtonProps={{
          label: 'Update Info',
        }}
      />
    </Card>
  );
};

export default GeneralInfo;
