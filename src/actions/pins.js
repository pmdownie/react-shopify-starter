import { api as apiConstants } from '../constants/constants';
import { fetchPins } from '../shopifyApi/fetching';

const loadProducts = () => { 
  return {
    type: apiConstants['PINS_PRODUCTS_LOAD']
  };
}

const loadProductsSuccess = (products) => {
  return {
		type: apiConstants['PINS_PRODUCTS_LOAD_SUCCESS'],
		products,
	}
}

const loadProductsFail = (error) => {
  return {
    type: apiConstants['PINS_PRODUCTS_LOAD_FAIL'],
    error
  };
}

export function getPins() {
  return dispatch => {
    dispatch(loadProducts());

    fetchPins()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        dispatch(loadProductsFail(error));
      });
  };
}