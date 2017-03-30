import { api as apiConstants } from '../constants/constants';
import { fetchWalletsPurses } from '../shopifyApi/fetching';

const loadProducts = () => { 
  return {
    type: apiConstants['WALLETS_PURSES_PRODUCTS_LOAD']
  };
}

const loadProductsSuccess = (products) => {
  return {
		type: apiConstants['WALLETS_PURSES_PRODUCTS_LOAD_SUCCESS'],
		products,
	}
}

const loadProductsFail = (error) => {
  return {
    type: apiConstants['WALLETS_PURSES_PRODUCTS_LOAD_FAIL'],
    error
  };
}

export function getWalletsPurses() {
  return dispatch => {
    dispatch(loadProducts());

    fetchWalletsPurses()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        dispatch(loadProductsFail(error));
      });
  };
}