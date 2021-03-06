import { useQuery } from 'react-query';
import Papa from 'papaparse';
import U from '../utils';

const parseData = () =>
  new Promise(resolve => {
    Papa.parse(process.env.REACT_APP_DATA_URL, {
      download: true,
      header: true,
      transformHeader: header => header.trim(),
      skipEmptyLines: true,
      complete: results => {
        resolve(results.data);
      },
      error: () => {
        throw new Error('An error occurred please try again');
      },
    });
  });

const fetchParsedData = async () => {
  const parsedData = await parseData();
  parsedData.forEach(item => {
    item.month = U.getMonth(item.date);
    item.price = U.getNumber(item.price);
  });
  return parsedData;
};

const useData = () =>
  useQuery('expenses', fetchParsedData, {
    retry: 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

export default useData;
