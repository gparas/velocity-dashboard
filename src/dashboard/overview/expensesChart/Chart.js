import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import U from './utils';

const myChart = ({ data }) => {
  const chartRef = useRef(null);

  const destroyChart = () => {
    if (chartRef.current) {
      chartRef.current = null;
    }
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, U.getChartConfig(data));
    return () => destroyChart();
  }, []);
  return <canvas id="myChart" ref={chartRef} />;
};

export default myChart;
