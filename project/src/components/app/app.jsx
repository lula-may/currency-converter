import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {propOpertaions} from "../props.js";

const App = (props) => {
  const {buyCurrency, date, saleSum, saleCurrency, rate, operations} = props;
  return (
    <Main
      buyCurrency={buyCurrency}
      date={date}
      operations={operations}
      rate={rate}
      saleCurrency={saleCurrency}
      saleSum={saleSum}
    />
  );
}

App.propTypes = {
  buyCurrency: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  operations: propOpertaions,
  rate: PropTypes.object.isRequired,
  saleCurrency: PropTypes.string.isRequired,
  saleSum: PropTypes.number.isRequired,
}

export default App;

