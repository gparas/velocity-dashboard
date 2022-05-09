import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '../../../components/card';
import useData from '../../../hooks/useData';
import U from '../../../utils';

const Activity = () => {
  const { data, isLoading } = useData();
  return (
    <Card title="latest activity" isLoading={isLoading}>
      <List dense>
        {data
          ?.slice(-10)
          .reverse()
          .map((item, i) => (
            <ListItem
              key={i}
              disableGutters
              secondaryAction={
                <ListItemText primary={U.fromatNumber(item.price)} />
              }
            >
              <ListItemText
                primary={`${item.category} - ${item.description}`}
                secondary={item.date}
              />
            </ListItem>
          ))}
      </List>
    </Card>
  );
};

export default Activity;
