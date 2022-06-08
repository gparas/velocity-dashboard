import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form } from '../../../components';
import { selectors, actions } from '../../../store/data';
import UploadButton from './UploadButton';
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
    U.parseData(file)
      .then(result => result)
      .catch(error => error);
  };
  return (
    <Card title="Upload Expenses">
      <UploadButton onChange={handleFileUpload} />
    </Card>
  );
};

export default FileUpload;
