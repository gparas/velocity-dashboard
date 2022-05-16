const getFormFields = formik => {
  return [
    {
      id: 'email',
      name: 'email',
      type: 'email',
      label: 'Email',
      margin: 'normal',
      required: true,
      fullWidth: true,
      value: formik.values.email,
      onChange: formik.handleChange,
      error: formik.touched.email && Boolean(formik.errors.email),
      helperText: formik.touched.email && formik.errors.email,
    },
    {
      id: 'password',
      name: 'password',
      type: 'password',
      label: 'Password',
      margin: 'normal',
      required: true,
      fullWidth: true,
      value: formik.values.password,
      onChange: formik.handleChange,
      error: formik.touched.password && Boolean(formik.errors.password),
      helperText: formik.touched.password && formik.errors.password,
    },
    {
      id: 'passwordConfirmation',
      name: 'passwordConfirmation',
      type: 'password',
      label: 'Confirm Password',
      margin: 'normal',
      required: true,
      fullWidth: true,
      value: formik.values.passwordConfirmation,
      onChange: formik.handleChange,
      error:
        formik.touched.passwordConfirmation &&
        Boolean(formik.errors.passwordConfirmation),
      helperText:
        formik.touched.passwordConfirmation &&
        formik.errors.passwordConfirmation,
    },
  ];
};

export default {
  getFormFields,
};
