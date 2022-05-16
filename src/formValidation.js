import * as yup from 'yup';

const validationSchema = {
  firstName: yup
    .string()
    .max(15, 'Must be 15 characters or less')
    .required('First name is required'),
  lastName: yup
    .string()
    .max(20, 'Must be 20 characters or less')
    .required('Last name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
};

const loginValidation = yup.object({
  email: validationSchema.email,
  password: validationSchema.password,
});

const registerValidation = yup.object({
  email: validationSchema.email,
  password: validationSchema.password,
  passwordConfirmation: validationSchema.passwordConfirmation,
});

const updateProfile = yup.object({
  firstName: validationSchema.firstName,
  lastName: validationSchema.lastName,
  email: validationSchema.email,
  password: validationSchema.password,
  passwordConfirmation: validationSchema.passwordConfirmation,
});

export { loginValidation, registerValidation, updateProfile };
