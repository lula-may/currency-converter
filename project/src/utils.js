import flatpickr from "flatpickr";

export const getCurrentRate = (rate, saleCurrency, perchaseCurrency) => {
  return parseFloat(rate[`${saleCurrency}${perchaseCurrency}`]);
};

export const convertSaleSum = (saleSum, currentRate) => {
  return (saleSum) ? (saleSum * currentRate).toFixed(4) : '';
};

export const convertPerchaseSum = (perchaseSum, currentRate) => {
  return (perchaseSum) ? (perchaseSum / currentRate).toFixed(4) : '';
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const generateId = () => Math.round(new Date() * Math.random());

export const formatDate = (date) => flatpickr.formatDate(date, 'Y-m-d');

export const isToday = (date) => (date.getDate() === new Date().getDate());
