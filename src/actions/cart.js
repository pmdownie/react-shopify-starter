
import { fetchCart } from '../shopifyApi/fetching';

function loadCart() {
  return {
    type: 'LOAD_CART'
  }
}

function loadCartSuccess(cartItem) {
  return {
    type: 'LOAD_CART_SUCCESS',
    cartItem
  }
}

function loadCartError(error) {
  return {
    type: 'LOAD_CART_ERROR',
    error
  }
}

export function addItemToCart(cartItem) {
  return {
    type: 'ADD_ITEM_TO_CART',
    cartItem
  }
}

export function removeItemToCart(lineItemId) {
  return {
    type: 'REMOVE_ITEM_TO_CART',
    lineItemId
  }
}

export function initializeCart() {
  return dispatch => {
    dispatch(loadCart());

    fetchCart()
      .then((cartItem) => {
        dispatch(loadCartSuccess(cartItem));
      })
      .catch(error => {
        console.log('Create Cart Error', error);
        dispatch(loadCartError(error));
      });
  };
}