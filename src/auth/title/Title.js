import Typography from '@mui/material/Typography';

const Title = ({ title, subtitle }) => {
  return (
    <>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography color="textSecondary" sx={{ mb: 5 }}>
        {subtitle}
      </Typography>
    </>
  );
};

export default Title;
