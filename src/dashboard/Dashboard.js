import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TopBar from './components/topBar';
import Navigation from './components/navigation';
import U from './utils';
import C from './constants';

const Dashboard = () => {
  const { refetch } = useQuery(
    [C.QUERY_KEY],
    U.fetchParsedData,
    C.QUERY_CONFIG
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
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
};

export default Dashboard;
