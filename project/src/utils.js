export const getCurrentRate = (rate, saleCurrency, buyCurrency) => {
  return parseFloat(rate[`${saleCurrency}${buyCurrency}`]);
};

export const convertSaleSum = (saleSum, currentRate) => {
  return (saleSum) ? (saleSum * currentRate).toFixed(4) : '';
};

export const convertBuySum = (buySum, currentRate) => {
  return (buySum) ? (buySum / currentRate).toFixed(4) : '';
};

