import U from '../../../utils';

const getMonthsFromData = data => data.map(({ month }) => month);

const getTotalExpenses = data => {
  const pipeline = [getMonthsFromData, U.flattenedArray, U.getUniqueArray];
  const months = pipeline.reduce((total, func) => {
    return func(total);
  }, data);
  return {
    period: `from ${months[0]} - ${months[months.length - 1]}`,
    total: U.fromatNumber(U.getTotalPrice(data)),
  };
};

const getMostSpending = data => {
  const highestPrice = U.getHighestPrice(data);
  return {
    price: U.fromatNumber(highestPrice),
    description: data.filter(item => item.price === highestPrice)[0]
      .description,
  };
};

const getMostSpendingCategory = data => {
  const dataset = [];
  const groupDataByCategory = U.groupArrayBy(data, 'category');

  Object.keys(groupDataByCategory).forEach(category => {
    const price = U.getTotalPrice(groupDataByCategory[category]);
    dataset.push({ category, price });
  });

  const highestPrice = U.getHighestPrice(dataset);
  const highestPriceCategory = dataset.filter(
    item => item.price === highestPrice
  )[0].category;

  return {
    category: highestPriceCategory,
    price: U.fromatNumber(highestPrice),
  };
};

export default {
  getTotalExpenses,
  getMostSpending,
  getMostSpendingCategory,
};
