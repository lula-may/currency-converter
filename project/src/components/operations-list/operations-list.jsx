import React from "react";
import Operation from "../operation/operation";
import {propOpertaions} from "../props";

const OperationsList = (props) => {
  const {operations, className} = props;

  return (
    <ul className={className}>
      {operations.map((item) => <Operation key={item.id} operation={item} />)}
    </ul>
  );
};

OperationsList.propType = propOpertaions;
export default OperationsList
