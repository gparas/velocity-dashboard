const getFormFields = formik => {
  return [
    {
      id: 'email',
      name: 'email',
      type: 'text',
      label: 'Email',
      disabled: true,
      value: formik.values.email,
      onChange: formik.handleChange,
      error: formik.touched.email && Boolean(formik.errors.email),
      helperText: formik.touched.email && formik.errors.email,
    },
    {
      id: 'fullName',
      name: 'fullName',
      type: 'text',
      label: 'Full Name',
      value: formik.values.fullName,
      onChange: formik.handleChange,
      error: formik.touched.fullName && Boolean(formik.errors.fullName),
      helperText: formik.touched.fullName && formik.errors.fullName,
    },
  ];
};

export default {
  getFormFields,
};
