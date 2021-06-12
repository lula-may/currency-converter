import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {propOpertaions} from "../props.js";

const App = (props) => {
  const {rate, operations} = props;
  return (
    <Main
      rate={rate}
      operations={operations}
    />
  );
}

App.propTypes = {
  rate: PropTypes.object.isRequired,
  operations: propOpertaions,
}

export default App;

