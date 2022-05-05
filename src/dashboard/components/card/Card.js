import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const Card = ({ title, isLoading, children }) => {
  return (
    <MuiCard>
      <CardHeader title={title} />
      <CardContent>{isLoading ? '...loading' : children}</CardContent>
    </MuiCard>
  );
};

export default Card;
