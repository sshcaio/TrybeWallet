export const USER = 'USER';
export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSE = 'GET_EXPENSE';

export const emailToStore = (email) => ({
  type: USER,
  payload: email,
});

export const requestAPI = () => ({
  type: REQUEST_API,
});

export const getCurrencies = (data) => ({
  type: GET_CURRENCIES,
  payload: data,
});

export const getExpense = (data) => ({
  type: GET_EXPENSE,
  payload: data,
});

export function fetchCurrenciesAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const rawAPI = await response.json();
      const rawData = Object.keys(rawAPI);
      const data = rawData.filter((e) => e !== 'USDT');
      return dispatch(getCurrencies(data));
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchPriceAPI(state) {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const rawAPI = await response.json();
      state.exchangeRates = rawAPI;
      console.log(state);
      return dispatch(getExpense(state));
    } catch (error) {
      console.error(error);
    }
  };
}
