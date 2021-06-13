import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Currency = {
  CNY: 'CNY',
  EUR: 'EUR',
  GBP: 'GBP',
  RUB: 'RUB',
  USD: 'USD',
};

const rate = {
  "CNYCNY": "1.000000",
  "CNYEUR": "0.128256",
  "CNYGBP": "0.110694",
  "CNYRUB": "11.525354",
  "CNYUSD": "0.156698",
  "EURCNY": "7.796876",
  "EUREUR": "1.000000",
  "EURGBP": "0.863066",
  "EURRUB": "89.861752",
  "EURUSD": "1.221755",
  "GBPCNY": "9.033930",
  "GBPEUR": "1.158660",
  "GBPGBP": "1.000000",
  "GBPRUB": "104.119243",
  "GBPUSD": "1.415598",
  "RUBCNY": "0.086765",
  "RUBEUR": "0.011128",
  "RUBGBP": "0.009604",
  "RUBRUB": "1.000000",
  "RUBUSD": "0.013596",
  "USDCNY": "6.381704",
  "USDEUR": "0.818495",
  "USDGBP": "0.706415",
  "USDRUB": "73.551395",
  "USDUSD": "1.000000",
}

const operations = [
  {
    id: 0,
    date: '2021-06-12',
    perchaseSum: 13.1234,
    perchaseCurrency: 'USD',
    saleSum: 1000,
    saleCurrency: 'RUB',
  },
  {
    id: 1,
    date: '2021-06-11',
    perchaseSum: 13.1234,
    perchaseCurrency: 'GBP',
    saleSum: 1000,
    saleCurrency: 'RUB',
  },
  {
    id: 2,
    date: '2021-06-10',
    perchaseSum: 13.1234,
    perchaseCurrency: 'USD',
    saleSum: 1000,
    saleCurrency: 'RUB',
  },
  {
    id: 3,
    date: '2021-06-09',
    perchaseSum: 13.1234,
    perchaseCurrency: 'USD',
    saleSum: 500,
    saleCurrency: 'CNY',
  },
  {
    id: 4,
    date: '2021-06-08',
    perchaseSum: 33.1234,
    perchaseCurrency: 'USD',
    saleSum: 2000,
    saleCurrency: 'RUB',
  },
  {
    id: 5,
    date: '2021-06-07',
    perchaseSum: 13.1234,
    perchaseCurrency: 'USD',
    saleSum: 1000,
    saleCurrency: 'RUB',
  },
  {
    id: 6,
    date: '2021-06-06',
    perchaseSum: 11.1234,
    perchaseCurrency: 'EUR',
    saleSum: 1000,
    saleCurrency: 'RUB',
  },
  {
    id: 7,
    date: '2021-06-05',
    perchaseSum: 13.1234,
    perchaseCurrency: 'USD',
    saleSum: 1000,
    saleCurrency: 'RUB',
  },
]

const DEFAULT_SALE_CURRENCY = Currency.RUB;
const DEFAULT_SALE_SUM = 1000;
const DEFAULT_BUY_CURRENCY = Currency.USD;
const DEFAULT_DATE = new Date();

ReactDOM.render(
  <React.StrictMode>
    <App
      buyCurrency={DEFAULT_BUY_CURRENCY}
      date={DEFAULT_DATE}
      operations={operations}
      rate={rate}
      saleCurrency={DEFAULT_SALE_CURRENCY}
      saleSum={DEFAULT_SALE_SUM}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
