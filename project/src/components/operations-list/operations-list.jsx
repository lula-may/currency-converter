import React from "react";
import PropTypes from "prop-types";
import Operation from "../operation/operation";
import {propOperations} from "../props";

const OperationsList = (props) => {
  const {operations, className} = props;

  return (
    <ul className={className}>
      {operations.map((item) => <Operation key={item.id} operation={item} />)}
    </ul>
  );
};

OperationsList.propType = {
  operations: propOperations,
  className: PropTypes.string.isRequired,
};
export default OperationsList
