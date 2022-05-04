import { useQueryClient } from 'react-query';
import Container from '@mui/material/Container';
import C from './constants';

const Overview = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData([C.QUERY_KEY]);
  console.log(data);
  return <Container>Overview</Container>;
};

export default Overview;
