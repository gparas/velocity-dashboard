import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Card from '../../../components/card';
import useData from '../../../hooks/useData';
import U from './utils';

const ExpensesFeatures = () => {
  const { data, isLoading } = useData();
  return (
    <Grid container spacing={3}>
      <Grid item md={4}>
        <Card title="Total Expenses">
          <Typography variant="h1" component="div">
            {isLoading ? <Skeleton /> : U.getTotalExpenses(data).total}
          </Typography>
          <Typography component="div">
            {isLoading ? <Skeleton /> : U.getTotalExpenses(data).period}
          </Typography>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card title="Most Spending Category">
          <Typography variant="h1" component="div">
            {isLoading ? <Skeleton /> : U.getMostSpendingCategory(data).price}
          </Typography>
          <Typography component="div">
            {isLoading ? (
              <Skeleton />
            ) : (
              U.getMostSpendingCategory(data).category
            )}
          </Typography>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card title="Most Spending">
          <Typography variant="h1" component="div">
            {isLoading ? <Skeleton /> : U.getMostSpending(data).price}
          </Typography>
          <Typography component="div">
            {isLoading ? <Skeleton /> : U.getMostSpending(data).description}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ExpensesFeatures;
