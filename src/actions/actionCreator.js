import { 
	fetchAllProducts,
	fetchCart } from '../shopifyApi/config';

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

export function addItemToCart(variantObject, quantity) {
  return {
    type: 'ADD_ITEM_TO_CART',
    variantObject,
    quantity
  }
}

export function removeItemToCart(lineItemId) {
  return {
    type: 'REMOVE_ITEM_TO_CART',
    lineItemId
  }
}


function loadProducts() {
  return {
    type: 'PRODUCTS_LOAD',
  };
}

function loadProductsSuccess(products) {
  console.log(products);
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

// export function addSunglassCollection(products) {
// 	return {
// 		type: 'ADD_SUNGLASS_COLLECTION',
// 		products
// 	}
// }

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

// export function getSunglassCollection() {
//   return dispatch => {
//     fetchSunglassCollection()
//       .then(products => {
//         console.log('actions.getSunglassCollection()', products);
//         dispatch(addSunglassCollection(products));
//       })
//       .catch(error => {
//         console.log('Sunglass Collection Error', error);
//       });
//   };
// }
