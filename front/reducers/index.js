import { combineReducers, } from "redux";

// import reducers here:
import userReducer from './user-reducer';

const allReducers = combineReducers({
  userReducer,
});

export default allReducers;
