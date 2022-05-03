import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

const Main = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
      <Outlet />
    </Box>
  );
};

export default Main;
