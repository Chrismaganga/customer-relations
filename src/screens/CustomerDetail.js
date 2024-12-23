import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleBack} style={[styles.button, styles.backButton]}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(selectedCustomer.id)} style={[styles.button, styles.deleteButton]}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleUpdate(selectedCustomer)} style={[styles.button, styles.updateButton]}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        customers && customers.length > 0 ? (
          customers.map((customer) => (
            <TouchableOpacity key={customer.id} onPress={() => handlePress(customer)} style={styles.customerContainer}>
              <Text style={styles.customerName}>{customer.name}</Text>
              <TouchableOpacity onPress={() => handlePress(customer)} style={[styles.button, styles.viewButton]}>
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
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
    padding: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customerContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    borderColor: 'black',
    alignItems: 'center',
    width: '95%',
  },
  customerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    margin: 15,
    textAlign: 'center',
  },
  customerEmail: {
    fontSize: 18,
    color: 'blue',
    margin: 10,
    textAlign: 'center',
  },
  customerPhone: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',

  },
  customerAddress: {
    fontSize: 18,
    color: 'white',
    margin: 10,
    textAlign: 'center',
  },
  customerRegion: {
    fontSize: 26,
    color: 'orange',
    margin: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '30%',
  },
  backButton: {
    backgroundColor: 'purple',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  updateButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomerDetail;
