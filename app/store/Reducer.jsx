import { combineReducers } from 'redux';
import customerReducer from '../features/customers/Reducer';

const rootReducer = combineReducers({
  customers: customerReducer

});

export default rootReducer;
