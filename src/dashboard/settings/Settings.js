import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useAuth from '../../hooks/useAuth';
import PageTitle from '../../components/pageTitle';
import Profile from './profile';

const Settings = () => {
  const { deleteAccount } = useAuth();
  return (
    <Container>
      <PageTitle>Settings</PageTitle>
      <Profile />
      <Button color="error" onClick={() => deleteAccount()}>
        delete account
      </Button>
    </Container>
  );
};

export default Settings;
