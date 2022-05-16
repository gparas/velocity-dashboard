import Typography from '@mui/material/Typography';

const PageTitle = ({ ...other }) => (
  <Typography component="h1" variant="h2" sx={{ mb: 3 }} {...other} />
);

export default PageTitle;
