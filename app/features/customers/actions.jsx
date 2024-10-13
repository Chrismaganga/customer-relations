export const fetchCustomers = () => ({
    type: 'FETCH_CUSTOMERS',
  });
  
  export const fetchCustomersSuccess = (customers) => ({
    type: 'FETCH_CUSTOMERS_SUCCESS',
    payload: customers,
  });
  
  export const fetchCustomersFailure = (error) => ({
    type: 'FETCH_CUSTOMERS_FAILURE',
    payload: error,
  });
  