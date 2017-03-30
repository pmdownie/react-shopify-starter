import { api as apiConstants } from '../constants/constants';
import { fetchBags } from '../shopifyApi/fetching';

const loadProducts = () => { 
  return {
    type: apiConstants['BAGS_PRODUCTS_LOAD']
  };
}

const loadProductsSuccess = (products) => {
  return {
		type: apiConstants['BAGS_PRODUCTS_LOAD_SUCCESS'],
		products,
	}
}

const loadProductsFail = (error) => {
  return {
    type: apiConstants['BAGS_PRODUCTS_LOAD_FAIL'],
    error
  };
}

export function getBags() {
  return dispatch => {
    dispatch(loadProducts());

    fetchBags()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        dispatch(loadProductsFail(error));
      });
  };
}