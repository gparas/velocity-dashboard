import { ref, deleteObject, listAll } from 'firebase/storage';
import { deleteUser } from 'firebase/auth';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card } from '../../../components';
import { auth, storage } from '../../../firebase';

const DeleteAccount = () => {
  const user = auth.currentUser;
  const userRef = ref(storage, `users/${user.uid}`);

  const handleDeleteUser = () =>
    listAll(userRef)
      .then(res =>
        res.items.forEach(itemRef => {
          if (itemRef) {
            deleteObject(itemRef);
          }
        })
      )
      .then(() => deleteUser(user))
      .catch(error => console.log(error));

  return (
    <Card title="Delete Account">
      <Typography paragraph>
        Delete your account and all of your source data. This is irreversible.
      </Typography>
      <Button
        variant="outlined"
        color="error"
        size="large"
        onClick={handleDeleteUser}
      >
        Delete account
      </Button>
    </Card>
  );
};

export default DeleteAccount;
