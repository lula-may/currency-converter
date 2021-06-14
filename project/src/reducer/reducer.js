import {extend} from "../utils";

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
};

const MAX_OPERATIONS_COUNT = 10;
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
];


const initialState = {
  date: new Date(),
  rate,
  operations,
}

const ActionType = {
  ADD_OPERATION: 'ADD_OPERATION',
  SET_DATE: 'SET_DATE',
  SET_RATE: 'SET_RATE',
}

const ActionCreator = {
  addNewOperation: (operation) => ({
    type: ActionType.ADD_OPERATION,
    payload: operation,
  }),

  setDate: (date) => ({
    type: ActionType.SET_DATE,
    payload: date,
  }),

  setRates: (rate) => ({
    type: ActionType.SET_RATE,
    payload: rate,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_OPERATION:
      return extend(state, {
        operations: [action.payload, ...state.operations.slice(0, MAX_OPERATIONS_COUNT)]
      });
    case ActionType.SET_DATE:
      return extend(state, {
        date: action.payload,
      });
    default: return state;
  }
};

export {ActionCreator, ActionType, reducer};
