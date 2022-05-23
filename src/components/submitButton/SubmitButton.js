import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const SubmitButton = ({ isLoading, label, ...other }) => (
  <Button
    type="submit"
    variant="contained"
    disabled={isLoading}
    startIcon={
      isLoading ? <CircularProgress color="inherit" size={24} /> : null
    }
    {...other}
  >
    {label}
  </Button>
);

export default SubmitButton;
