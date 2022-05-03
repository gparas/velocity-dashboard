import { useRoutes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TopBar from './components/topBar';
import Navigation from './components/navigation';
import routes from './routes';

const Dashboard = () => {
  const element = useRoutes(routes);
  return (
    <>
      <TopBar />
      <Toolbar />
      <Box sx={{ display: 'flex' }}>
        <Navigation />
        {element}
      </Box>
    </>
  );
};

export default Dashboard;
