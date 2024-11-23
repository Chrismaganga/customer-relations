import { createSlice } from '@reduxjs/toolkit';
import customers from '../../utils/customers';
const customerSlice = createSlice({
    name: 'customers',
    initialState: customers,
    reducers: {
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
            return state.filter(customer => customer.id !== action.payload.id);
        },
    },
});

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;