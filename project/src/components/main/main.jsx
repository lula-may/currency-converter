import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Converter from "../converter/converter.jsx";
import Error from "../error/error.jsx";
import Footer from "../footer/footer.jsx";
import History from "../history/history.jsx";
import Header from "../header/header.jsx";
import Hero from "../hero/hero.jsx";
import Loading from "../loading/loading.jsx";
import withCurrentOperation from "../../hocs/with-current-operation/with-current-operation.jsx";
import {propOperations} from "../props.js";
import {ActionCreator, Operation} from "../../reducer/reducer.js";

const ConverterWrapped = withCurrentOperation(Converter);

const Main = (props) => {
  const {
    currentPage,
    date,
    hasError,
    isLoading,
    onConverterFormSubmit,
    onDateChange,
    onHistoryReset,
    onPerchaseCurrencyChange,
    onSaleCurrencyChange,
    onSaleSumChange,
    operations,
    perchaseCurrency,
    rate,
    saleSum,
    saleCurrency,
  } = props;

  const renderComponent = (Component) => {
    if (isLoading) {
      return (
        <Loading/>
      );
    }
    if (hasError) {
      return (
        <Error/>
      );
    }
    return Component;
  };

  return (
    <Fragment>
      <Header currentPage={currentPage} />
      <main className="page__main">
        <Hero />
        {renderComponent(
          <ConverterWrapped
            date={date}
            onSubmit={onConverterFormSubmit}
            onDateChange={onDateChange}
            onPerchaseCurrencyChange={onPerchaseCurrencyChange}
            onSaleCurrencyChange={onSaleCurrencyChange}
            onSaleSumChange={onSaleSumChange}
            perchaseCurrency={perchaseCurrency}
            rate={rate}
            saleCurrency={saleCurrency}
            saleSum={saleSum}
          />
        )}
        <History
          onHistoryReset={onHistoryReset}
          operations={operations}
        />
      </main>
      <Footer currentPage={currentPage} />
    </Fragment>
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

Main.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onConverterFormSubmit: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onHistoryReset: PropTypes.func.isRequired,
  onPerchaseCurrencyChange: PropTypes.func.isRequired,
  onSaleCurrencyChange: PropTypes.func.isRequired,
  onSaleSumChange: PropTypes.func.isRequired,
  operations: propOperations,
  perchaseCurrency: PropTypes.string.isRequired,
  rate: PropTypes.object.isRequired,
  saleCurrency: PropTypes.string.isRequired,
  saleSum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
