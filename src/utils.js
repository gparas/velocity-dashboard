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
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'EUR',
  }).format(num);

const getUniqueArray = array =>
  array.filter((element, index, array) => array.indexOf(element) === index);

const flattenedArray = array =>
  array.reduce((total, subArray) => {
    return total.concat(subArray);
  }, []);

const getMonth = date =>
  new Date(date).toLocaleString('en-us', {
    month: 'long',
  });

const getTotalPrice = array =>
  array.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);

const getHighestPrice = array =>
  Math.max.apply(
    Math,
    array.map(item => item.price)
  );

export default {
  groupArrayBy,
  getUniqueArray,
  getNumber,
  fromatNumber,
  getMonth,
  getTotalPrice,
  getHighestPrice,
  flattenedArray,
};
