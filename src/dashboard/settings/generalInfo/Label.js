import Link from '@mui/material/Link';

const Label = ({ ...other }) => {
  return (
    <Link
      component="label"
      underline="hover"
      align="center"
      display="block"
      sx={[
        {
          '&:hover': {
            cursor: 'pointer',
          },
        },
        theme => ({
          fontSize: theme.typography.pxToRem(13),
        }),
      ]}
      {...other}
    >
      change
    </Link>
  );
};

export default Label;
