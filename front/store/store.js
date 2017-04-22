import { createStore, applyMiddleware, } from 'redux';

// import reducers for use in store.
import allReducers from '../reducers';

const store = createStore(allReducers);

export default store;
