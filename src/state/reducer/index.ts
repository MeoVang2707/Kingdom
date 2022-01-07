import { combineReducers } from 'redux';
import authReducer from './auth';
import marketplaceReducer from './marketplace';
import metricsReducer from './metrics';

const store = combineReducers({
  auth: authReducer,
  marketplace: marketplaceReducer,
  metrics: metricsReducer,
});

export default store;
