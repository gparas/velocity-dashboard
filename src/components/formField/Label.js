import Typography from '@mui/material/Typography';

const Label = ({ name, error, ...other }) => (
  <Typography
    component="label"
    variant="caption"
    color="textSecondary"
    htmlFor={name}
    sx={{
      position: 'absolute',
      top: 0,
      let: 0,
      fontWeight: 'fontWeightMedium',
      transition: theme => theme.transitions.create(['color']),
    }}
    {...other}
  />
);

export default Label;
