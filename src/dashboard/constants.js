const DATA_URL = process.env.REACT_APP_DATA_URL;

const QUERY_KEY = 'simpleData';

const QUERY_CONFIG = {
  retry: 2,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  enabled: false,
};

export default {
  DATA_URL,
  QUERY_CONFIG,
  QUERY_KEY,
};
