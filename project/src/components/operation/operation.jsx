import React from "react";
import {propOperation} from "../props";

const Operation = ({operation}) => {
  const {date, saleSum, saleCurrency, perchaseSum, perchaseCurrency} = operation;
  return (
    <li className="history__item operation">
      <span className="operation__date">{date}</span>
      <span className="operation__sum operation__sum--sale">{saleSum} {saleCurrency}</span>
      <span className="operation__sum operation__sum--perchase">{perchaseSum} {perchaseCurrency}</span>
    </li>
  );
}

Operation.propTypes = propOperation;

export default Operation;
