import { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PageTitle from '../../components/pageTitle';
import GeneralInfo from './generalInfo';
import Password from './password';
import Snackbar from './snackbar';

const Settings = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };
  return (
    <Container>
      <PageTitle>Settings</PageTitle>
      <GeneralInfo handleOpenSnackbar={handleOpenSnackbar} />
      <Password handleOpenSnackbar={handleOpenSnackbar} />
      <Button color="error">delete account</Button>
      <Snackbar open={openSnackbar} onClose={handleCloseSnackbar} />
    </Container>
  );
};

export default Settings;
