import React from 'react';
import PropTypes from 'prop-types';
import Operation from '../operation/operation';
import {propOperations} from '../props';

export default function OperationsList (props) {
  const {operations, className} = props;

  return (
    <ul className={className}>
      {operations.map((item) => <Operation key={item.id} operation={item} />)}
    </ul>
  );
}

OperationsList.propTypes = {
  operations: propOperations,
  className: PropTypes.string.isRequired,
};
