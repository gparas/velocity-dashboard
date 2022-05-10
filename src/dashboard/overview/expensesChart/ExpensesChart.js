import { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useData from '../../../hooks/useData';
import Card from '../../../components/card';
import Chart from '../../../components/chart';
import U from './utils';

const ExpensesChart = () => {
  const { data, isLoading } = useData();
  const theme = useTheme();
  const chartRef = useRef(null);
  return (
    <Card title="Expenses" isLoading={isLoading}>
      <Chart
        ref={chartRef}
        type="bar"
        options={U.getChartOptions()}
        data={U.getChartData(data, theme)}
      />
    </Card>
  );
};

export default ExpensesChart;
