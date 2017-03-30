import { shopClient } from './config';

// CART
export const fetchCart = () => {
  return new Promise((resolve, reject) => {
    shopClient.createCart()
      .then(cart => {
          resolve(cart);
      }).catch((error) => {
        console.error(new Error('Fetching cart error!'));
        reject(error);
      });
  });
}

// PRODUCTS
export function fetchAllProducts() {
  return new Promise((resolve, reject) => {
    shopClient.fetchAllProducts()
      .then((products) => {
        resolve(products.map((product) => {
          return product.attrs;
        }));
      }).catch((error) => {
        console.error(new Error('Fetching products error!'));
        reject(error);
      });
  });
}
