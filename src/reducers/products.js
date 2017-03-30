import { api as apiConstants } from '../constants/constants';

const initialState = {
  items: [],
  sunglasses: {},
  loading: false,
  error: null
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case apiConstants[`${type}_PRODUCTS_LOAD`]:
      return {
        ...initialState,
        loading: true,
      };
    case apiConstants[`${type}_PRODUCTS_LOAD_SUCCESS`]:
      return {
        ...state,
        items: action.products
      };
    case apiConstants[`${type}_PRODUCTS_LOAD_FAIL`]:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}