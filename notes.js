import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { deleteCustomer, updateCustomer } from '../features/components/Customer/customerSlice';

const CustomerDetail = () => {
  const customers = useSelector((state) => state.customers);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const dispatch = useDispatch();

  const handlePress = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleBack = () => {
    setSelectedCustomer(null);
  };

  const handleDelete = (customerId) => {
    dispatch(deleteCustomer(customerId));
    setSelectedCustomer(null);
  };

  const handleUpdate = (customer) => {
    const updatedCustomer = { ...customer, name: 'Updated Name' }; // Example update
    dispatch(updateCustomer(updatedCustomer));
    setSelectedCustomer(updatedCustomer);
  };

  return (
    <View style={styles.container}>
      {selectedCustomer ? (
        <View style={styles.customerContainer}>
          <Text style={styles.customerName}>{selectedCustomer.name}</Text>
          <Text style={styles.customerEmail}>Email: {selectedCustomer.email}</Text>
          <Text style={styles.customerPhone}>Phone: {selectedCustomer.phone}</Text>
          <Text style={styles.customerAddress}>Address: {selectedCustomer.address.street}, {selectedCustomer.address.city}, {selectedCustomer.address.state} {selectedCustomer.address.zip}</Text>
          <Text style={styles.customerRegion}>Region: {selectedCustomer.region}</Text>
          <Button title="Back" onPress={handleBack} style={styles.Back}/>
          <Button title="Delete" onPress={() => handleDelete(selectedCustomer.id)} style={styles.Delete}/>
          <Button title="Update" onPress={() => handleUpdate(selectedCustomer)} style={styles.udpdate} />
        </View>
      ) : (
        customers && customers.length > 0 ? (
          customers.map((customer) => (
            <TouchableOpacity key={customer.id} onPress={() => handlePress(customer)} style={styles.customerContainer}>
              <Text style={styles.customerName}>{customer.name}</Text>
              <Button title="View Details" onPress={() => handlePress(customer)} />
            </TouchableOpacity>
          ))
        ) : (
          <Text>No customers available</Text>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'cyan',
    margin: 10,
  },
  customerContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  customerName: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'red',
  },
  customerEmail: {
    fontSize: 14,
    color: 'blue',
  },
  customerPhone: {
    fontSize: 14,
    color: 'green',
  },
  customerAddress: {
    fontSize: 14,
    color: 'purple',
  },
  customerRegion: {
    fontSize: 14,
    color: 'orange',
  },



});

export default CustomerDetail;