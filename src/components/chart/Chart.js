import { useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import ChartJs from 'chart.js/auto';

const Chart = ({ config }) => {
  const theme = useTheme();
  const chartRef = useRef(null);

  const destroyChart = () => {
    if (chartRef.current) {
      chartRef.current = null;
    }
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    ChartJs.defaults.font.size = 13;
    ChartJs.defaults.font.family = theme.typography.fontFamily;
    ChartJs.defaults.plugins.tooltip.titleFont = {
      size: 12,
      weight: theme.typography.fontWeightMedium,
    };
    ChartJs.defaults.plugins.tooltip.bodyFont = { size: 12 };
    new ChartJs(ctx, config);
    return () => destroyChart();
  }, []);
  return <canvas ref={chartRef} />;
};

export default Chart;
