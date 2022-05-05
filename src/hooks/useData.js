import { useQuery } from 'react-query';
import Papa from 'papaparse';

const parseData = () =>
  new Promise(resolve => {
    Papa.parse(process.env.REACT_APP_DATA_URL, {
      download: true,
      header: true,
      complete: results => {
        resolve(results.data);
      },
    });
  });

const fetchParsedData = async () => {
  const parsedData = await parseData();
  return parsedData;
};

const useData = () =>
  useQuery('expenses', fetchParsedData, {
    retry: 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

export default useData;
