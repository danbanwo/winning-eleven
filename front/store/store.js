import { createStore, applyMiddleware, } from 'redux';
import logger from 'redux-logger';

// import reducers for use in store.
import allReducers from '../reducers';

const middleware = applyMiddleware(logger());

const store = createStore(allReducers, middleware);

export default store;
