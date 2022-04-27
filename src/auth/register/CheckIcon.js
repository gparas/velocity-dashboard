import Avatar from '@mui/material/Avatar';
import Grow from '@mui/material/Grow';
import { Check } from '../icons';

const CheckIcon = ({ active }) => (
  <Grow in={active}>
    <Avatar
      sx={{
        width: 28,
        height: 28,
        bgcolor: 'primary.main',
        color: '#fff',
        position: 'absolute',
        right: -8,
        top: -8,
      }}
    >
      <Check fontSize="small" />
    </Avatar>
  </Grow>
);

export default CheckIcon;
