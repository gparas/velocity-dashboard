import U from '../../../utils';
import C from './constants';

const getChartData = data => {
  if (!data) return null;

  const groupDataByCategory = U.groupArrayBy(data, 'category');
  const datasets = [];
  const labels = [];

  Object.keys(groupDataByCategory).forEach(category => {
    const data = [];
    const color = C.CATEGORY_COLOR[category];
    const groupDataByMonth = U.groupArrayBy(
      groupDataByCategory[category],
      'month'
    );
    Object.keys(groupDataByMonth).forEach(month => {
      const sum = U.getTotalPrice(groupDataByMonth[month]);
      data.push(sum);
      labels.push(month);
    });
    datasets.push({
      label: category,
      data,
      borderColor: color,
      backgroundColor: color,
      fill: false,
    });
  });

  return { labels: U.getUniqueArray(labels), datasets };
};

const getChartConfig = data => ({
  type: 'line',
  data: getChartData(data),
  options: {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 4,
        },
      },
      title: {
        display: false,
      },
    },
  },
});

export default {
  getChartConfig,
};
