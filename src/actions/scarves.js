import { api as apiConstants } from '../constants/constants';
import { fetchScarves } from '../shopifyApi/fetching';

const loadProducts = () => { 
  return {
    type: apiConstants['SCARVES_PRODUCTS_LOAD']
  };
}

const loadProductsSuccess = (products) => {
  return {
		type: apiConstants['SCARVES_PRODUCTS_LOAD_SUCCESS'],
		products,
	}
}

const loadProductsFail = (error) => {
  return {
    type: apiConstants['SCARVES_PRODUCTS_LOAD_FAIL'],
    error
  };
}

export function getScarves() {
  return dispatch => {
    dispatch(loadProducts());

    fetchScarves()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        dispatch(loadProductsFail(error));
      });
  };
}