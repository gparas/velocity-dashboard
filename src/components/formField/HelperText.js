import Typography from '@mui/material/Typography';

const HelperText = ({ error, ...other }) => (
  <Typography
    variant="caption"
    color={error ? 'error' : 'textSecondary'}
    sx={{
      textTransform: 'none',
      letterSpacing: 0,
      marginTop: 0.5,
      transition: theme => theme.transitions.create(['color']),
    }}
    {...other}
  />
);

export default HelperText;
