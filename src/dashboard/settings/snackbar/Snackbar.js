import MuiSnackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Snackbar = ({ open, onClose }) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={4000}
      open={open}
      onClose={onClose}
    >
      <Alert severity="success" elevation={6} variant="filled">
        Successfully updated
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
