import { combineReducers } from 'redux';
import customerSlice from './customerReducer';
import regionSlice from './RegionReducer';

const rootReducer = combineReducers({
    customer: customerSlice,
    region: regionSlice,
});

export default rootReducer;