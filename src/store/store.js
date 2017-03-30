import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from '../reducers/index';

const middlewares = [
	thunk
]
const enhancers = compose(
	applyMiddleware(...middlewares),
	window.devToolsExtension ? window.devToolsExtension() : f => f 
);

const store = createStore(rootReducer, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;