import { combineReducers, } from "redux";

// import reducers here:
import authReducer from './auth_reducer';
import contestReducer from './contest_reducer';

const allReducers = combineReducers({
  authentication: authReducer,
  contests: contestReducer,
});

export default allReducers;
