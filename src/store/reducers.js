import { combineReducers } from 'redux';
import customerSlice from '../features/components/Customer/customerSlice';
import regionSlice from '../features/components/Region/regionSlice';
import customerSagas from '../features/components/Customer/sagas/customerSagas';


const rootReducer = combineReducers({
  customers: customerSlice,
  regions: regionSlice,
  saga: customerSagas,

});

export default rootReducer;
