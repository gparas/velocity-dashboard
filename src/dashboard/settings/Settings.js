import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useAuth from '../../hooks/useAuth';

const Settings = () => {
  const { deleteAccount } = useAuth();
  return (
    <Container>
      <Button color="error" onClick={() => deleteAccount()}>
        delete account
      </Button>
    </Container>
  );
};

export default Settings;
