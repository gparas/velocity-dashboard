import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '../../../components/card';
import FormField from '../../../components/formField';
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  return (
    <Card title="Edit Profile">
      <Box component="form" noValidate onSubmit={() => {}}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <FormField label="Email" value={user.email} disabled fullWidth />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default Profile;
