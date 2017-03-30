import { api as apiConstants } from '../constants/constants';
import { fetchJewels } from '../shopifyApi/fetching';

const loadProducts = () => { 
  return {
    type: apiConstants['JEWELS_PRODUCTS_LOAD']
  };
}

const loadProductsSuccess = (products) => {
  return {
		type: apiConstants['JEWELS_PRODUCTS_LOAD_SUCCESS'],
		products,
	}
}

const loadProductsFail = (error) => {
  return {
    type: apiConstants['JEWELS_PRODUCTS_LOAD_FAIL'],
    error
  };
}

export function getJewels() {
  return dispatch => {
    dispatch(loadProducts());

    fetchJewels()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        dispatch(loadProductsFail(error));
      });
  };
}