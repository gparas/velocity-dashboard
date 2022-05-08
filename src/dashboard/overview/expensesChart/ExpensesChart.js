import { useTheme } from '@mui/material/styles';
import useData from '../../../hooks/useData';
import Card from '../../../components/card';
import Chart from '../../../components/chart';
import U from './utils';

const ExpensesChart = () => {
  const { data, isLoading } = useData();
  const theme = useTheme();
  return (
    <Card title="Expenses" isLoading={isLoading}>
      <Chart config={U.getChartConfig(data, theme)} />
    </Card>
  );
};

export default ExpensesChart;
