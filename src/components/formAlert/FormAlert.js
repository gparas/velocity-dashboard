import Alert from '@mui/material/Alert';
import U from './utils';

const FormAlert = ({ error }) => {
  if (!error) return null;
  return (
    <Alert sx={{ mb: 2 }} severity="error">
      {U.getErrorMessage(error)}
    </Alert>
  );
};

export default FormAlert;
