import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {getCurrentRate, convertBuySum, convertSaleSum} from "../../utils";

const withCurrentOperation = (Component) => {

  class WithCurrentOperation extends PureComponent {
    constructor(props) {
      super(props);
      const {saleSum, saleCurrency, buyCurrency, rate} = props;
      const currentRate = getCurrentRate(rate, saleCurrency, buyCurrency);

      this.state = {
        saleSum,
        saleCurrency,
        buySum: convertSaleSum(saleSum, currentRate),
        buyCurrency,
        currentRate,
      }

      this._handleBuyCurrencyChange = this._handleBuyCurrencyChange.bind(this);
      this._handleBuySumChange = this._handleBuySumChange.bind(this);
      this._handleSaleCurrencyChange = this._handleSaleCurrencyChange.bind(this);
      this._handleSaleSumChange = this._handleSaleSumChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    _handleBuySumChange(evt) {
      const {currentRate} = this.state;
      const buySum = Number(evt.target.value) || '';
      const saleSum = convertBuySum(buySum, currentRate);
      this.setState({
        buySum,
        saleSum
      });
    }

    _handleBuyCurrencyChange(evt) {
      const {saleCurrency, buySum} = this.state;
      const {rate} = this.props;
      const buyCurrency = evt.target.value;
      const currentRate = getCurrentRate(rate, saleCurrency, buyCurrency);
      const saleSum = convertBuySum(buySum, currentRate);
      this.setState({
        buyCurrency,
        currentRate,
        saleSum,
      });
    }

    _handleSaleSumChange(evt) {
      const {currentRate} = this.state;
      const saleSum = Number(evt.target.value) || '';
      const buySum = convertSaleSum(saleSum, currentRate);
      this.setState({
        buySum,
        saleSum,
      });
    }

    _handleSaleCurrencyChange(evt) {
      const {buyCurrency, saleSum} = this.state;
      const {rate} = this.props;
      const saleCurrency = evt.target.value;
      const currentRate = getCurrentRate(rate, saleCurrency, buyCurrency);
      const buySum = convertSaleSum(saleSum, currentRate);
      console.log('saleChange');
      this.setState({
        saleCurrency,
        currentRate,
        buySum,
      });
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      const {date, onSubmit} = this.props;
      const {saleSum, saleCurrency, buySum, buyCurrency} = this.state;
      const operation = {
        date,
        saleSum,
        saleCurrency,
        buySum,
        buyCurrency
      };
      onSubmit(operation);
    }

    render() {
      const {saleSum, saleCurrency, buySum, buyCurrency} = this.state;
      return (
        <Component
          {...this.props}
          buyCurrency={buyCurrency}
          buySum={buySum}
          onBuyCurrencyChange={this._handleBuyCurrencyChange}
          onBuySumChange={this._handleBuySumChange}
          onSaleCurrencyChange={this._handleSaleCurrencyChange}
          onSaleSumChange={this._handleSaleSumChange}
          onFormSubmit={this._handleFormSubmit}
          saleCurrency={saleCurrency}
          saleSum={saleSum}
        />
      );
    }
  }

  WithCurrentOperation.propTypes = {
    buyCurrency: PropTypes.string.isRequired,
    rate: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    saleSum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    saleCurrency: PropTypes.string.isRequired,
  }

  return WithCurrentOperation;
}

export default withCurrentOperation;
