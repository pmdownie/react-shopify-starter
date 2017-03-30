
const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCTS_LOAD':
      return {
        ...initialState,
        loading: true,
      };
    case 'PRODUCTS_LOAD_SUCCESS':
      return {
        ...state,
        items: action.products
      };
    case 'PRODUCTS_LOAD_FAIL':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}