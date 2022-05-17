import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const SubmitButton = ({ isLoading, ...other }) => (
  <Button
    type="submit"
    variant="contained"
    disabled={isLoading}
    startIcon={
      isLoading ? <CircularProgress color="inherit" size={24} /> : null
    }
    {...other}
  />
);

export default SubmitButton;
