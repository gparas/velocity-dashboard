import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ExpensesBreakdown from './expensesBreakdown';
import ExpensesChart from './expensesChart';
import ExpensesFeatures from './expensesFeatures';
import Activity from './activity';

const Overview = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ExpensesChart />
        </Grid>
        <Grid item xs={12}>
          <ExpensesFeatures />
        </Grid>
        <Grid item xs={5}>
          <Activity />
        </Grid>
        <Grid item xs={7}>
          <ExpensesBreakdown />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Overview;
