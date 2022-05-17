const getFormFields = formik => {
  return [
    {
      id: 'password',
      name: 'password',
      type: 'password',
      label: 'New Password',
      value: formik.values.password,
      onChange: formik.handleChange,
      error: formik.touched.password && Boolean(formik.errors.password),
      helperText: formik.touched.password && formik.errors.password,
    },
    {
      id: 'passwordConfirmation',
      name: 'passwordConfirmation',
      type: 'password',
      label: 'Confirm new password',
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
