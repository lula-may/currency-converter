const API_KEY = 'a005702a978fcb50d0d747ff0da0ec52';

const AppRoute = {
  ROOT: '/',
  CONTACTS: '/contacts',
  CREDIT: '/credit',
  LOGIN: '/login',
  MAIN: '/main',
  QUESTION: '/question',
  SERVICES: '/services',
};

const CURRENCIES = ['USD', 'RUB', 'EUR', 'GBP', 'CNY'];

const Currency = {
  CNY: 'CNY',
  EUR: 'EUR',
  GBP: 'GBP',
  RUB: 'RUB',
  USD: 'USD',
};

const DEFAULT_SALE_CURRENCY = Currency.RUB;
const DEFAULT_SALE_SUM = 1000;
const DEFAULT_PERCHASE_CURRENCY = Currency.USD;
const DIGITS_NUMBER = 4;
const MAX_OPERATIONS_COUNT = 9;

const NAVIGATION_LINKS = [
  {
    link: AppRoute.SERVICES,
    title: 'Услуги',
  },
  {
    link: AppRoute.CREDIT,
    title: 'Рассчитать кредит',
  },
  {
    link: AppRoute.ROOT,
    title: 'Конвертер валют',
  },
  {
    link: AppRoute.CONTACTS,
    title: 'Контакты',
  },
  {
    link: AppRoute.QUESTION,
    title: 'Задать вопрос',
  },
];

export {API_KEY, AppRoute, CURRENCIES, Currency, DEFAULT_PERCHASE_CURRENCY, DEFAULT_SALE_CURRENCY, DEFAULT_SALE_SUM, DIGITS_NUMBER, MAX_OPERATIONS_COUNT, NAVIGATION_LINKS};
