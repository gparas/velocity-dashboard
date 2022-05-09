import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useData from '../../../hooks/useData';
import Card from '../../../components/card';
import Chart from '../../../components/chart';
import U from './utils';
import C from './constants';

const ExpensesBreakdown = () => {
  const { data, isLoading } = useData();
  const theme = useTheme();
  return (
    <Card title="Expenses Breakdown" isLoading={isLoading}>
      <Typography align="center">Top {C.DATA_SLICE} categories</Typography>
      <Chart config={U.getChartConfig(data, theme)} />
    </Card>
  );
};

export default ExpensesBreakdown;
