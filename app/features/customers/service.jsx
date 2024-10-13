import AsyncStorage from '@react-native-async-storage/async-storage';

// Example API URL
const API_URL = 'https://example.com/api/customers';

// Function to fetch customers
export const fetchCustomers = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};

// Function to add a new customer
export const addCustomer = async (customer) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
    });
    const data = await response.json();
    return data;
};

// Function to update a customer
export const updateCustomer = async (customer) => {
    const response = await fetch(`${API_URL}/${customer.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
    });
    const data = await response.json();
    return data;
};

// Function to delete a customer
export const deleteCustomer = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
