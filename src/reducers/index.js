import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cart from './cart';
import products from './products';

const rootReducer = combineReducers({cart, products, routing: routerReducer});

export default rootReducer; 