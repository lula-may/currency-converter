import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {generateId, getCurrentRate, convertPerchaseSum, convertSaleSum, formatDate} from "../../utils";

const withCurrentOperation = (Component) => {

  class WithCurrentOperation extends PureComponent {
    constructor(props) {
      super(props);
      const {saleSum, saleCurrency, perchaseCurrency, rate} = props;
      const currentRate = getCurrentRate(rate, saleCurrency, perchaseCurrency);

      this.state = {
        currentRate,
        perchaseSum: convertSaleSum(saleSum, currentRate),
      }

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handlePerchaseCurrencyChange = this._handlePerchaseCurrencyChange.bind(this);
      this._handlePerchaseSumChange = this._handlePerchaseSumChange.bind(this);
      this._handleSaleCurrencyChange = this._handleSaleCurrencyChange.bind(this);
      this._handleSaleSumChange = this._handleSaleSumChange.bind(this);
    }

    _handlePerchaseSumChange(evt) {
      const {onSaleSumChange} = this.props;
      const {currentRate} = this.state;
      const perchaseSum = parseFloat(evt.target.value) || '';
      const saleSum = convertPerchaseSum(perchaseSum, currentRate);
      console.log(saleSum, typeof(saleSum));
      onSaleSumChange(saleSum);
      this.setState({
        perchaseSum,
      });
    }

    _handlePerchaseCurrencyChange(evt) {
      const {onPerchaseCurrencyChange, rate, saleCurrency, saleSum} = this.props;
      const perchaseCurrency = evt.target.value;
      const currentRate = getCurrentRate(rate, saleCurrency, perchaseCurrency);
      const perchaseSum = convertSaleSum(saleSum, currentRate);
      onPerchaseCurrencyChange(perchaseCurrency);
      this.setState({
        perchaseSum,
        currentRate,
      });
    }

    _handleSaleSumChange(evt) {
      const {onSaleSumChange} = this.props;
      const {currentRate} = this.state;
      const saleSum = Number(evt.target.value) || '';
      const perchaseSum = convertSaleSum(saleSum, currentRate);
      onSaleSumChange(saleSum);
      this.setState({
        perchaseSum,
      });
    }

    _handleSaleCurrencyChange(evt) {
      const {onSaleCurrencyChange, rate,perchaseCurrency, saleSum} = this.props;
      const saleCurrency = evt.target.value;
      const currentRate = getCurrentRate(rate, saleCurrency, perchaseCurrency);
      const perchaseSum = convertSaleSum(saleSum, currentRate);
      onSaleCurrencyChange(saleCurrency);
      this.setState({
        currentRate,
        perchaseSum,
      });
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      const {date, onSubmit, perchaseCurrency, saleSum, saleCurrency} = this.props;
      const {perchaseSum} = this.state;
      const id = generateId();
      const operation = {
        id,
        date: formatDate(date),
        perchaseSum: parseFloat(perchaseSum),
        perchaseCurrency,
        saleSum: parseFloat(saleSum),
        saleCurrency,
      };
      onSubmit(operation);
    }

    render() {
      const {perchaseSum} = this.state;

      return (
        <Component
          {...this.props}
          perchaseSum={perchaseSum}
          onPerchaseCurrencyChange={this._handlePerchaseCurrencyChange}
          onPerchaseSumChange={this._handlePerchaseSumChange}
          onSaleCurrencyChange={this._handleSaleCurrencyChange}
          onSaleSumChange={this._handleSaleSumChange}
          onFormSubmit={this._handleFormSubmit}
        />
      );
    }
  }

  WithCurrentOperation.propTypes = {
    perchaseCurrency: PropTypes.string.isRequired,
    rate: PropTypes.object.isRequired,
    onPerchaseCurrencyChange: PropTypes.func.isRequired,
    onSaleCurrencyChange: PropTypes.func.isRequired,
    onSaleSumChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    saleSum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    saleCurrency: PropTypes.string.isRequired,
  }

  return WithCurrentOperation;
}

export default withCurrentOperation;
