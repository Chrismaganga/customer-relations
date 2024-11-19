import { configureStore } from '@reduxjs/toolkit';
import regionSlice from '../features/reducers/regionReducer';
import customerSlice from '../features/reducers/customerReducer';

const store = configureStore({
    reducer: {
        region: regionSlice,
        customer: customerSlice,
    },
});

export default store;