import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import useData from '../../../hooks/useData';
import Chart from './Chart';

const ExpensesChart = () => {
  const { data, isLoading } = useData();
  return (
    <Card>
      <CardHeader title="Expenses" />
      <CardContent>
        {isLoading ? '...loading' : <Chart data={data} />}
      </CardContent>
    </Card>
  );
};

export default ExpensesChart;
