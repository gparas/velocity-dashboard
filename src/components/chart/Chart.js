import { useEffect, useRef, forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import ChartJS from 'chart.js/auto';

const Chart = forwardRef((props, ref) => {
  const { type, data, options } = props;
  const theme = useTheme();
  const canvasRef = useRef(null);

  const renderChart = () => {
    if (!canvasRef.current) return;

    ChartJS.defaults.font.size = 13;
    ChartJS.defaults.font.family = theme.typography.fontFamily;
    ChartJS.defaults.plugins.tooltip.titleFont = {
      size: 12,
      weight: theme.typography.fontWeightMedium,
    };
    ChartJS.defaults.plugins.tooltip.bodyFont = { size: 12 };

    ref.current = new ChartJS(canvasRef.current, {
      type,
      data,
      options,
    });
  };

  const destroyChart = () => {
    if (canvasRef.current) {
      canvasRef.current = null;
    }
  };

  useEffect(() => {
    renderChart();
    return () => destroyChart();
  }, []);

  return <canvas ref={canvasRef} />;
});

export default Chart;
