import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import NotFound from "../not-found/not-found.jsx";
import {propOpertaions} from "../props.js";
import {ActionCreator, Operation} from "../../reducer/reducer.js";
import {AppRoute, NAVIGATION_LINKS} from "../../const.js";

const App = (props) => {
  const {
    date,
    isLoading,
    hasError,
    rate,
    onConverterFormSubmit,
    onDateChange,
    onHistoryReset,
    onPerchaseCurrencyChange,
    onSaleCurrencyChange,
    onSaleSumChange,
    operations,
    perchaseCurrency,
    saleCurrency,
    saleSum,
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT} >
          <Main
            currentPage={NAVIGATION_LINKS[2]}
            date={date}
            hasError={hasError}
            isLoading={isLoading}
            onConverterFormSubmit={onConverterFormSubmit}
            onDateChange={onDateChange}
            onHistoryReset={onHistoryReset}
            onPerchaseCurrencyChange={onPerchaseCurrencyChange}
            onSaleCurrencyChange={onSaleCurrencyChange}
            onSaleSumChange={onSaleSumChange}
            operations={operations}
            perchaseCurrency={perchaseCurrency}
            rate={rate}
            saleCurrency={saleCurrency}
            saleSum={saleSum}
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  date: state.date,
  isLoading: state.isLoading,
  hasError: state.hasError,
  operations: state.operations,
  rate: state.rate,
  perchaseCurrency: state.perchaseCurrency,
  saleCurrency: state.saleCurrency,
  saleSum: state.saleSum,
});

const mapDispatchToProps = (dispatch) => ({
  onConverterFormSubmit(operation) {
    dispatch(ActionCreator.addNewOperation(operation))
  },
  onDateChange(date) {
    dispatch(ActionCreator.setDate(date));
    dispatch(Operation.loadRate(date));
  },
  onHistoryReset() {
    dispatch(ActionCreator.clearOperations())
  },
  onSaleCurrencyChange(currency) {
    dispatch(ActionCreator.setSaleCurrency(currency))
  },
  onPerchaseCurrencyChange(currency) {
    dispatch(ActionCreator.setPerchaseCurrency(currency))
  },
  onSaleSumChange(sum) {
    dispatch(ActionCreator.setSaleSum(sum))
  },
});

App.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onConverterFormSubmit: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onHistoryReset: PropTypes.func.isRequired,
  onPerchaseCurrencyChange: PropTypes.func.isRequired,
  onSaleCurrencyChange: PropTypes.func.isRequired,
  onSaleSumChange: PropTypes.func.isRequired,
  operations: propOpertaions,
  rate: PropTypes.object.isRequired,
  saleSum: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

