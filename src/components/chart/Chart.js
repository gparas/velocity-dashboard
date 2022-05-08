import { useEffect, useRef } from 'react';
import ChartJs from 'chart.js/auto';

const Chart = ({ config }) => {
  const chartRef = useRef(null);

  const destroyChart = () => {
    if (chartRef.current) {
      chartRef.current = null;
    }
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    new ChartJs(ctx, config);
    return () => destroyChart();
  }, []);
  return <canvas ref={chartRef} />;
};

export default Chart;
