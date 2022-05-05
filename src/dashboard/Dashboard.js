import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TopBar from './components/topBar';
import Navigation from './components/navigation';

const Dashboard = () => (
  <>
    <TopBar />
    <Toolbar />
    <Box sx={{ display: 'flex' }}>
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Outlet />
      </Box>
    </Box>
  </>
);

export default Dashboard;
