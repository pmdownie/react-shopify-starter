
// export default function cart(state = {}, action) {
//   switch (action.type) {
//     case 'CREATE_CART':
//       console.log('Creating Cart');
//       return {
//         ...state
//       };
//     default:
//       return state;
//   }
// }
const initialState = {
  items: {},
  loading: false,
  error: null
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return {
        ...state,
        loading: true
      };
    case 'LOAD_CART_SUCCESS':
      return {
        ...state,
        items: action.cartItem
      };
    case 'LOAD_CART_FAIL':
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        items: action.cartItem
      }
    default:
      return state;
  }
};

export default cart;