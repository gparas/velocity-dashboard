import { useRef } from 'react';
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
  const chartRef = useRef(null);
  return (
    <Card title="Expenses Breakdown" isLoading={isLoading}>
      <Typography align="center">Top {C.DATA_SLICE} categories</Typography>
      <Chart
        ref={chartRef}
        type="doughnut"
        options={U.getChartOptions()}
        data={U.getChartData(data, theme)}
      />
    </Card>
  );
};

export default ExpensesBreakdown;
