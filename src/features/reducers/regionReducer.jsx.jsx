import { createSlice } from '@reduxjs/toolkit';
import Customers from '../utilities/customers';

const initialState = {
  regions: []
};

const regionSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    addRegion: (state, action) => {
      state.regions.push(action.payload);
    },
    removeRegion: (state, action) => {
      state.regions = state.regions.filter(region => region.id !== action.payload);
    },
    addCustomerToRegion: (state, action) => {
      const { regionId, customerId } = action.payload;
      const region = state.regions.find(region => region.id === regionId);
      if (region) {
        region.customers.push(customerId);
      }
    },
    removeCustomerFromRegion: (state, action) => {
      const { regionId, customerId } = action.payload;
      const region = state.regions.find(region => region.id === regionId);
      if (region) {
        region.customers = region.customers.filter(id => id !== customerId);
      }
    }
  }
});
const { addRegion, removeRegion, addCustomerToRegion, removeCustomerFromRegion } = regionSlice.actions;

export default regionSlice.reducer;
