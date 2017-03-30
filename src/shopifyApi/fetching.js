import { shopClient } from './config';
import { collectionId } from './collectionId';

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

// BAGS
export const fetchBags = () => {
  return new Promise((resolve, reject) => {
    shopClient.fetchQueryProducts({collection_id: collectionId.BAGS })
      .then((products) => {
        resolve(products.map((product) => {
          return product.attrs;
        }));
      }).catch((error) => {
        console.error(new Error('Fetching Bag products error!'));
        reject(error);
      });
  });
}

// WALLETS & PURSES
export const fetchWalletsPurses = () => {
  return new Promise((resolve, reject) => {
    shopClient.fetchQueryProducts({collection_id: collectionId.WALLETS_PURSES })
      .then((products) => {
        resolve(products.map((product) => {
          return product.attrs;
        }));
      }).catch((error) => {
        console.error(new Error('Fetching Bag products error!'));
        reject(error);
      });
  });
}

// SUNGLASSES
export const fetchSunglasses = () => {
  return new Promise((resolve, reject) => {
    shopClient.fetchQueryProducts({collection_id: collectionId.SUNGLASSES })
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

// KEY CHAINS
export const fetchKeyChains = () => {
  return new Promise((resolve, reject) => {
    shopClient.fetchQueryProducts({collection_id: collectionId.KEYCHAINS })
      .then((products) => {
        resolve(products.map((product) => {
          return product.attrs;
        }));
      }).catch((error) => {
        console.error(new Error('Fetching Bag products error!'));
        reject(error);
      });
  });
}

// PINS
export const fetchPins = () => {
  return new Promise((resolve, reject) => {
    shopClient.fetchQueryProducts({collection_id: collectionId.PINS })
      .then((products) => {
        resolve(products.map((product) => {
          return product.attrs;
        }));
      }).catch((error) => {
        console.error(new Error('Fetching Bag products error!'));
        reject(error);
      });
  });
}

// JEWELS
export const fetchJewels = () => {
  return new Promise((resolve, reject) => {
    shopClient.fetchQueryProducts({collection_id: collectionId.JEWELS })
      .then((products) => {
        resolve(products.map((product) => {
          return product.attrs;
        }));
      }).catch((error) => {
        console.error(new Error('Fetching Bag products error!'));
        reject(error);
      });
  });
}

// SCARVES
export const fetchScarves = () => {
  return new Promise((resolve, reject) => {
    shopClient.fetchQueryProducts({collection_id: collectionId.SCARVES })
      .then((products) => {
        resolve(products.map((product) => {
          return product.attrs;
        }));
      }).catch((error) => {
        console.error(new Error('Fetching Bag products error!'));
        reject(error);
      });
  });
}

// SALES