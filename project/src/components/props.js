import PropTypes from 'prop-types';

const propOperation = PropTypes.shape({
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  perchaseCurrency: PropTypes.string.isRequired,
  perchaseSum: PropTypes.number.isRequired,
  saleCurrency: PropTypes.string.isRequired,
  saleSum: PropTypes.number.isRequired,
}).isRequired;

const propOperations = PropTypes.arrayOf(PropTypes.shape(propOperation)).isRequired;
const propLink = PropTypes.shape({
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}).isRequired;

export {propLink, propOperation, propOperations};
