import Papa from 'papaparse';
import C from './constants';

const parseData = () =>
  new Promise(resolve => {
    Papa.parse(C.DATA_URL, {
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

export default {
  fetchParsedData,
};
