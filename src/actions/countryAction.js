import {GET_COUNTRY} from './index';


const api = 'https://restcountries.eu/rest/v2/name/';

export const getCountry = (country, cb) => (dispatch) => {
    console.log(country)
  fetch(`${api + country}`)
    .then((data) => {
      dispatch({
        type: GET_COUNTRY,
        payload: data,
      });
      cb && cb();
    })
    .catch((err) => console.log(err));
};
