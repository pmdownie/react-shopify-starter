import { api as apiConstants } from '../constants/constants';
import { fetchSunglasses } from '../shopifyApi/fetching';

const loadProducts = () => { 
  return {
    type: apiConstants['SUNGLASSES_PRODUCTS_LOAD']
  };
}

const loadProductsSuccess = (products) => {
  return {
		type: apiConstants['SUNGLASSES_PRODUCTS_LOAD_SUCCESS'],
		products,
	}
}

const loadProductsFail = (error) => {
  return {
    type: apiConstants['SUNGLASSES_PRODUCTS_LOAD_FAIL'],
    error
  };
}

export function getSunglasses() {
  return dispatch => {
    dispatch(loadProducts());

    fetchSunglasses()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        dispatch(loadProductsFail(error));
      });
  };
}