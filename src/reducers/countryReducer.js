import {GET_COUNTRY} from '../actions/';

const initialState = {
  country: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY: {
      return {
        ...state,
        country: action.payload,
      };
    }

    default:
      return state;
  }
}
