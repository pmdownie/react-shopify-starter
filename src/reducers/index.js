import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cart from './cart';
import bags from './bags';
import walletsPurses from './walletsPurses';
import sunglasses from './sunglasses';
import keyChains from './keyChains';
import pins from './pins';
import jewels from './jewels';
import scarves from './scarves';

const rootReducer = combineReducers({cart, bags, walletsPurses, sunglasses, keyChains, pins, jewels, scarves, routing: routerReducer});

export default rootReducer; 