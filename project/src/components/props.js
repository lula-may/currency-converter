import PropTypes from "prop-types";

const propOperation = PropTypes.shape({
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  perchaseCurrency: PropTypes.string.isRequired,
  perchaseSum: PropTypes.number.isRequired,
  saleCurrency: PropTypes.string.isRequired,
  saleSum: PropTypes.number.isRequired,
}).isRequired;

const propOpertaions = PropTypes.arrayOf(PropTypes.shape(propOperation)).isRequired;

export {propOperation, propOpertaions};
