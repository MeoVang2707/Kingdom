import { combineReducers } from 'redux';
import authReducer from './auth';
import marketplaceReducer from './marketplace';

const store = combineReducers({
  auth: authReducer,
  marketplace: marketplaceReducer,
});

export default store;
