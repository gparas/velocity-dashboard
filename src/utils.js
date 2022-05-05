const groupArrayBy = (array, property) =>
  array.reduce((acc, obj) => {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

const getNumber = value => {
  if (!value) return null;
  return Number(value.replace(/[^0-9.-]+/g, ''));
};

const fromatNumber = num =>
  new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);

const getUniqueArray = array =>
  array.filter((element, index, array) => array.indexOf(element) === index);

const getMonth = date =>
  new Date(date).toLocaleString('en-us', {
    month: 'long',
  });

export default {
  groupArrayBy,
  getUniqueArray,
  getNumber,
  fromatNumber,
  getMonth,
};
