import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const Card = ({ title, isLoading, children }) => {
  return (
    <MuiCard style={{ height: '100%' }}>
      <CardHeader
        title={title}
        titleTypographyProps={{ variant: 'caption', color: 'textSecondary' }}
      />
      <CardContent>{isLoading ? '...loading' : children}</CardContent>
    </MuiCard>
  );
};

export default Card;
