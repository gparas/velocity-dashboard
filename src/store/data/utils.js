import Papa from 'papaparse';
import U from '../../utils';

const parseData = file => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      transformHeader: header => header.trim(),
      skipEmptyLines: true,
      step: row => {
        console.log(row);
        if ('date' in row.data) {
          resolve(row.data);
        } else {
          reject('foo');
        }
      },
      complete: results => {
        console.log(results);
        // if (results.errors.length) {
        //   const message = results.errors.map(error => error.message).join(', ');
        //   reject(message);
        // } else {
        //   const data = results.data;
        //   data.forEach(item => {
        //     item.month = U.getMonth(item.date);
        //     item.price = U.getNumber(item.price);
        //   });
        //   resolve(data);
        // }
      },
      error: error => {
        reject(error);
      },
    });
  });
};

const fetchParsedData = file =>
  parseData(file)
    .then(data => data)
    .catch(error => error);

export default {
  parseData,
  fetchParsedData,
};
