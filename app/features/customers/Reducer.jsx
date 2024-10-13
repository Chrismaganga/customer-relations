// src/sagas/customerSagas.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customers } from '../../utilities/customers'; // Adjust the path as necessary

// Slice
const customerSlice = createSlice({
    name: 'customers',
    initialState: [],
    reducers: {
        setCustomers: (state, action) => {
            return action.payload;
        },
        addCustomer: (state, action) => {
            state.push(action.payload);
        },
        updateCustomer: (state, action) => {
            const index = state.findIndex(customer => customer.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteCustomer: (state, action) => {
            return state.filter(customer => customer.id !== action.payload);
        },
    },
});

// Async Thunks
export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
    // Instead of API call, return the local customer data
    return customers;
});

export const { setCustomers, addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
