import U from '../../../utils';

const getChartData = (data, theme) => {
  if (!data) return null;

  let series = [];

  const groupDataByCategory = U.groupArrayBy(data, 'category');
  const totalExpenses = U.getTotalPrice(data);
  Object.keys(groupDataByCategory).forEach(category => {
    const totalPrice = U.getTotalPrice(groupDataByCategory[category]);
    const percentage = (totalPrice / totalExpenses) * 100;
    series.push({ category, percentage });
  });

  series.sort((a, b) => b.percentage - a.percentage);

  const labels = series.map(({ category }) => category);
  const datasetsData = series.map(({ percentage }) => percentage);

  return {
    labels,
    datasets: [
      {
        data: datasetsData,
        backgroundColor: theme.palette.charts,
      },
    ],
  };
};

const getChartConfig = (data, theme) => ({
  type: 'doughnut',
  data: getChartData(data, theme),
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          boxWidth: 4,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: ({ label, formattedValue }) => {
            return `${label}: ${formattedValue}%`;
          },
        },
      },
    },
  },
});

export default {
  getChartConfig,
};
