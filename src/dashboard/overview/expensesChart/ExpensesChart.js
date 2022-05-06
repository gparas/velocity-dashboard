import useData from '../../../hooks/useData';
import Card from '../../../components/card';
import Chart from './Chart';

const ExpensesChart = () => {
  const { data, isLoading } = useData();
  return (
    <Card title="Expenses" isLoading={isLoading}>
      <Chart data={data} />
    </Card>
  );
};

export default ExpensesChart;
