import { useState } from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/pageTitle';
import GeneralInfo from './generalInfo';
import ChangePassword from './changePassword';
import DeleteAccount from './deleteAccount';
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
      <ChangePassword handleOpenSnackbar={handleOpenSnackbar} />
      <DeleteAccount />
      <Snackbar open={openSnackbar} onClose={handleCloseSnackbar} />
    </Container>
  );
};

export default Settings;
