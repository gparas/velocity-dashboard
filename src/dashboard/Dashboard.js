import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TopBar from './components/topBar/TopBar';

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <Toolbar />
      <Container>
        <Card>Foo</Card>
      </Container>
    </>
  );
};

export default Dashboard;
