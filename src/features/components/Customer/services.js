import { customers as fetchCustomersFromUtils, regions as fetchRegionsFromUtils } from '../../utils/customers';

export const fetchCustomers = async () => {
    try {
        const customers = await fetchCustomersFromUtils();
        return customers;
    } catch (error) {
        console.error('Error fetching customers:', error);
        throw error;
    }
};

export const getCustomerById = async (id) => {
    try {
        const customers = await fetchCustomersFromUtils();
        return customers.find(customer => customer.id === id);
    } catch (error) {
        console.error('Error fetching customer by ID:', error);
        throw error;
    }
};

export const fetchRegions = async () => {
    try {
        const regions = await fetchRegionsFromUtils();
        return regions;
    } catch (error) {
        console.error('Error fetching regions:', error);
        throw error;
    }
};