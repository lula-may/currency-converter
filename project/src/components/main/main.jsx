/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Converter from "../converter/converter.jsx";
import Error from "../error/error.jsx";
import Footer from "../footer/footer.jsx";
import History from "../history/history.jsx";
import Header from "../header/header.jsx";
import Hero from "../hero/hero.jsx";
import Loading from "../loading/loading.jsx";
import withCurrentOperation from "../../hocs/with-current-operation/with-current-operation.jsx";
import {propOpertaions} from "../props.js";

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
            hasError={hasError}
            isLoading={isLoading}
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

Main.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onConverterFormSubmit: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onHistoryReset: PropTypes.func.isRequired,
  onPerchaseChange: PropTypes.func.isRequired,
  onSaleCurrencyChange: PropTypes.func.isRequired,
  onSaleSumChange: PropTypes.func.isRequired,
  operations: propOpertaions,
  perchaseCurrency: PropTypes.string.isRequired,
  rate: PropTypes.object.isRequired,
  saleCurrency: PropTypes.string.isRequired,
  saleSum: PropTypes.number.isRequired,
};

export default Main;
