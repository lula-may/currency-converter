import React, {PureComponent} from "react";
import InputField from "../input-field/input-field";

const getCurrentRate = (rate, saleCurrency, buyCurrency) => {
  return Number(rate[`${saleCurrency}${buyCurrency}`]);
};

export default class Converter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      saleSum: 1000,
      saleCurrency: 'RUB',
      buySum: 13.1234,
      buyCurrency: 'USD',
      date: '1.12.2020',
      currentRate: getCurrentRate(props.rate, 'RUB', 'USD'),
    }

    this._onBuyCurrencyChange = this._onBuyCurrencyChange.bind(this);
    this._onBuySumChange = this._onBuySumChange.bind(this);
    this._onSaleCurrencyChange = this._onSaleCurrencyChange.bind(this);
    this._onSaleSumChange = this._onSaleSumChange.bind(this);
  }

  _onBuySumChange(evt) {
    const buySum = Number(evt.target.value) || '';
    const saleSum = (buySum) ? (buySum / this.state.currentRate).toFixed(2) : '';
    this.setState({
      buySum,
      saleSum
    });
  }

  _onBuyCurrencyChange(evt) {
    const {saleCurrency, buySum} = this.state;
    const {rate} = this.props;
    const buyCurrency = evt.target.value;
    const currentRate = getCurrentRate(rate, saleCurrency, buyCurrency);
    const saleSum = (buySum) ? (buySum / currentRate).toFixed(2) : '';
    this.setState({
      buyCurrency,
      currentRate,
      saleSum,
    });
  }

  _onSaleSumChange(evt) {
    const saleSum = Number(evt.target.value) || '';
    const buySum = (saleSum) ? (saleSum * this.state.currentRate).toFixed(4) : '';
    this.setState({
      buySum,
      saleSum,
    });
  }

  _onSaleCurrencyChange(evt) {
    const {buyCurrency, saleSum} = this.state;
    const {rate} = this.props;
    const saleCurrency = evt.target.value;
    const currentRate = getCurrentRate(rate, saleCurrency, buyCurrency);
    const buySum = (saleSum) ? (saleSum / currentRate).toFixed(2) : '';
    this.setState({
      saleCurrency,
      currentRate,
      buySum,
    });
  }

  render() {
    const {buySum, buyCurrency, saleSum, saleCurrency} = this.state;
    return (
      <section className="converter">
          <h1 className="converter__title">Конвертер валют</h1>
          <form action="#" className="convert-form" method="GET">
            <div className="convert-form__wrapper">
              <InputField
                name="sale"
                labelText="У меня есть"
                currency={saleCurrency}
                value={saleSum}
                onCurrencyChange={this._onSaleCurrencyChange}
                onValueChange={this._onSaleSumChange}
              />
              <img className="convert-form__sign" src="img/arrows.svg" width="50" height="34" alt="Конвертировать валюту"/>
              <InputField
                name="buy"
                labelText="Хочу купить"
                currency={buyCurrency}
                value= {buySum}
                onCurrencyChange={this._onBuyCurrencyChange}
                onValueChange={this._onBuySumChange}
              />
            </div>
            <div className="convert-form__wrapper">
              <p className="convert-form__field field">
                <label className="visually-hidden" htmlFor="date">Дата для расчета курса валют</label>
                <input className="field__control field__control--input field__control--date" type="text" id="date" name="date" defaultValue="1.12.2020" />
              </p>
              <button className="convert-form__button button" type="submit">Сохранить результат</button>
            </div>
          </form>
        </section>
    );
  }
}
