import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form } from '../../../components';
import { selectors, actions } from '../../../store/data';
import U from './utils';

const FileUpload = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getIsLoading);

  const formik = useFormik({
    initialValues: {
      file: '',
    },
    onSubmit: values => {
      dispatch(actions.fetchData(values.file));
    },
  });
  const handleFileUpload = event => {
    const [file] = event.target.files;
    if (file) {
      formik.setFieldValue('file', file);
    }
  };
  const fields = U.getFormFields(handleFileUpload);
  return (
    <Card title="Upload Expenses">
      <Form
        fields={fields}
        onSubmit={formik.handleSubmit}
        isLoading={isLoading}
        direction={{ xs: 'column', sm: 'row' }}
        submitButtonProps={{
          label: 'Upload File',
        }}
      />
    </Card>
  );
};

export default FileUpload;
