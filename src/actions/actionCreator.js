import { 
	fetchAllProducts,
	fetchCart } from '../shopifyApi/fetching';



// cart actions

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



// product actions actions

function loadProducts() {
  return {
    type: 'PRODUCTS_LOAD',
  };
}

function loadProductsSuccess(products) {
  return {
		type: 'ADD_PRODUCTS',
		products,
	}
}

function loadProductsFail(error) {
  return {
    type: 'PRODUCTS_LOAD_LOAD_FAIL',
    error
  };
}




// thunks

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

export function getProducts() {
  return dispatch => {
    dispatch(loadProducts());

    fetchAllProducts()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        dispatch(loadProductsFail(error));
      });
  };
}