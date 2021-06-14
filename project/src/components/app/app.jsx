import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {propOpertaions} from "../props.js";
import {ActionCreator} from "../../reducer/reducer.js";
import {DEFAULT_PERCHASE_CURRENCY, DEFAULT_SALE_CURRENCY, DEFAULT_SALE_SUM } from "../../const.js";
const App = (props) => {
  const {
    date,
    rate,
    onConverterFormSubmit,
    onDateChange,
    operations,
  } = props;

  return (
    <Main
      perchaseCurrency={DEFAULT_PERCHASE_CURRENCY}
      date={date}
      onConverterFormSubmit={onConverterFormSubmit}
      onDateChange={onDateChange}
      operations={operations}
      rate={rate}
      saleCurrency={DEFAULT_SALE_CURRENCY}
      saleSum={DEFAULT_SALE_SUM}
    />
  );
}

const mapStateToProps = (state) => ({
  date: state.date,
  operations: state.operations,
  rate: state.rate,
});

const mapDispatchToProps = (dispatch) => ({
  onConverterFormSubmit(operation) {
    dispatch(ActionCreator.addNewOperation(operation))
  },
  onDateChange(date) {
    dispatch(ActionCreator.setDate(date))
  },
});

App.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onConverterFormSubmit: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  operations: propOpertaions,
  rate: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

