import Alert from '@mui/material/Alert';
import C from './constants';

const FormAlert = ({ error }) => {
  if (!error) return null;
  return <Alert severity="error">{C.ERROR_CODE[error]}</Alert>;
};

export default FormAlert;
