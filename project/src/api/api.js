const API_KEY = `a005702a978fcb50d0d747ff0da0ec52`;

const url = `http://api.currencylayer.com/historical?access_key=${API_KEY}&currencies=RUB,USD,EUR,GBP,CNY&date=2021-06-01`;

const CURRENCIES = ['USD', 'RUB', 'EUR', 'GBP', 'CNY'];

const getAllRates = (quotes) => {
const quote = Object.assign({}, quotes);
    CURRENCIES.forEach((y) => {
      CURRENCIES.forEach((x) => {
        quote[`${y}${x}`] = (quote[`USD${x}`] / quote[`USD${y}`]).toFixed(6);
      })
    });
  return quote;
}

const rate = fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const quote = getAllRates(data.quotes);
    console.log(quote);
    return quote;
  })
  .catch((err) => console.error(err));

  export {rate};
