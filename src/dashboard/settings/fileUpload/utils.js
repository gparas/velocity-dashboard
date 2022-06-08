import Papa from 'papaparse';

const parseData = file => {
  if (!file) return;
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      transformHeader: header => header.trim(),
      skipEmptyLines: true,
      chunk: (results, parser) => {
        const headers = results.data[0];
        if (headers.includes('foo')) {
          resolve(results.data);
        } else {
          parser.abort();
          reject(new Error('fail'));
        }
      },
      // complete: results => {
      //   console.log(results);
      //   resolve(results.data);
      //   reject(error.errors);
      // },
      error: error => {
        console.log(error);
        reject(error);
      },
    });
  });
};

const getFormFields = handleFileUpload => {
  return [
    {
      id: 'file',
      name: 'file',
      type: 'file',
      onChange: handleFileUpload,
      inputProps: {
        accept: '.csv',
      },
    },
  ];
};

const csvToArray = (str, delimiter = ',') => {
  const headers = str.slice(0, str.indexOf('\n')).split(delimiter);
  const transformHeaders = headers.map(header => header.trim());
  const rows = str.slice(str.indexOf('\n') + 1).split('\n');
  console.log(rows);
  const arr = rows.map(row => {
    const values = row.split(delimiter);
    const el = transformHeaders.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });
};

export default {
  parseData,
  getFormFields,
  csvToArray,
};
