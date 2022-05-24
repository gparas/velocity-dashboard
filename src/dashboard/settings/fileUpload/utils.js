const getFormFields = handleFileUpload => {
  return [
    {
      id: 'file',
      name: 'file',
      type: 'file',
      onChange: handleFileUpload,
      inputProps: {
        accept: '.txt',
      },
    },
  ];
};

export default {
  getFormFields,
};
