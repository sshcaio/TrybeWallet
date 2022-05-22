export const USER = 'USER';
export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCIES = 'GET_CURRENCIES';

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

export function fetchAPI() {
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
