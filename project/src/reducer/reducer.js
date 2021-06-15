import {extend} from '../utils';
import {DEFAULT_PERCHASE_CURRENCY, DEFAULT_SALE_CURRENCY, DEFAULT_SALE_SUM, MAX_OPERATIONS_COUNT} from '../const';


const initialState = {
  date: new Date(),
  isLoading: false,
  hasError: false,
  operations: [],
  rate: {},
  perchaseCurrency: DEFAULT_PERCHASE_CURRENCY,
  saleCurrency: DEFAULT_SALE_CURRENCY,
  saleSum: DEFAULT_SALE_SUM,
};

const ActionType = {
  CLEAR_OPERATIONS: 'CLEAR_OPERATIONS',
  END_LOADING: 'END_LOADING',
  LOAD_RATE: 'LOAD_RATE',
  SET_ERROR: 'SET_ERROR',
  SET_DATE: 'SET_DATE',
  START_LOADING: 'START_LOADING',
  SET_PERCHASE_CURRENCY: 'SET_PERCHASE_CURRENCY',
  SET_SALE_SUM: 'SET_SALE_SUM',
  SET_SALE_CURRENCY: 'SET_SALE_CURRENCY',
  UPDATE_OPERATIONS: 'UPDATE_OPERATIONS',
};

const ActionCreator = {
  clearOperations: () => ({
    type: ActionType.CLEAR_OPERATIONS,
  }),

  endLoading: () => ({
    type: ActionType.END_LOADING,
  }),

  loadRate: (rate) => ({
    type: ActionType.LOAD_RATE,
    payload: rate,
  }),

  setDate: (date) => ({
    type: ActionType.SET_DATE,
    payload: date,
  }),

  setPerchaseCurrency: (currency) => ({
    type: ActionType.SET_PERCHASE_CURRENCY,
    payload: currency,
  }),

  setSaleCurrency: (currency) => ({
    type: ActionType.SET_SALE_CURRENCY,
    payload: currency,
  }),

  setSaleSum: (sum) => ({
    type: ActionType.SET_SALE_SUM,
    payload: sum,
  }),

  setRates: (rate) => ({
    type: ActionType.LOAD_RATE,
    payload: rate,
  }),

  startLoading: () => ({
    type: ActionType.START_LOADING,
  }),

  setError: (hasError) => ({
    type: ActionType.SET_ERROR,
    payload: hasError,
  }),

  updateOperations: (operations) => ({
    type: ActionType.UPDATE_OPERATIONS,
    payload: operations,
  }),
};

const Operation = {
  loadRate: (date) => (dispatch, getState, api) => {
    dispatch(ActionCreator.startLoading());
    dispatch(ActionCreator.setError(false));
    return api.getRates(date)
      .then((response) => {
        dispatch(ActionCreator.loadRate(response));
        dispatch(ActionCreator.endLoading());
      })
      .catch((err) => {
        dispatch(ActionCreator.endLoading());
        dispatch(ActionCreator.setError(true));
        return err;
      });
  },

  addNewOperation: (operation) => (dispatch, getState) => {
    const {operations} = getState();
    const newOperations = [operation, ...operations.slice(0, MAX_OPERATIONS_COUNT)];
    dispatch(ActionCreator.updateOperations(newOperations));
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CLEAR_OPERATIONS:
      return extend(state, {
        operations: [],
      });

    case ActionType.END_LOADING:
      return extend(state, {
        isLoading: false,
      });

    case ActionType.LOAD_RATE:
      return extend(state, {
        rate: action.payload,
      });

    case ActionType.SET_DATE:
      return extend(state, {
        date: action.payload,
      });

    case ActionType.SET_ERROR:
      return extend(state, {
        hasError: action.payload,
      });

    case ActionType.SET_PERCHASE_CURRENCY:
      return extend(state, {
        perchaseCurrency: action.payload,
      });

    case ActionType.SET_SALE_CURRENCY:
      return extend(state, {
        saleCurrency: action.payload,
      });

    case ActionType.SET_SALE_SUM:
      return extend(state, {
        saleSum: action.payload,
      });

    case ActionType.START_LOADING:
      return extend(state, {
        isLoading: true,
      });

    case ActionType.UPDATE_OPERATIONS:
      return extend(state, {
        operations: action.payload,
      });

    default: return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
