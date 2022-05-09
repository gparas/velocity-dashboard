import U from '../../../utils';

const getChartData = (data, theme) => {
  if (!data) return null;

  let datasetsData = [];

  const groupDataByCategory = U.groupArrayBy(data, 'category');
  Object.keys(groupDataByCategory).forEach(category => {
    const totalPrice = U.getTotalPrice(groupDataByCategory[category]);
    datasetsData.push({ y: category, x: totalPrice });
  });

  datasetsData.sort((a, b) => b.x - a.x);

  return {
    datasets: [
      {
        data: datasetsData,
        backgroundColor: theme.palette.charts[1],
      },
    ],
  };
};

const getTooltipLabel = context => {
  let label = context.dataset.label || '';

  if (label) {
    label += ': ';
  }
  if (context.raw !== null) {
    label += U.fromatNumber(context.raw.x);
  }
  return label;
};

const getChartConfig = (data, theme) => ({
  type: 'bar',
  data: getChartData(data, theme),
  options: {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: context => getTooltipLabel(context),
        },
      },
    },
  },
});

export default {
  getChartConfig,
};
