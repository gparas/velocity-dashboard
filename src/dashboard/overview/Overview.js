import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ExpensesChart from './expensesChart';
import ExpensesAnalysis from './expensesAnalysis';

const Overview = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ExpensesChart />
        </Grid>
        <Grid item xs={12}>
          <ExpensesAnalysis />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Overview;
