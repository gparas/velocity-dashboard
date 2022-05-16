import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { LogoIcon } from '../../icons';

const FullPageLoading = ({ open }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Dialog
      fullScreen
      open={open}
      PaperProps={{
        sx: { justifyContent: 'center', alignItems: 'center' },
      }}
    >
      <Box sx={{ width: '100%', position: 'fixed', top: 0 }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <LogoIcon sx={{ fontSize: 80 }} />
    </Dialog>
  );
};

export default FullPageLoading;
