import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CustomerDetail = () => {
  const customers = useSelector((state) => state.customers);

  const handlePress = (customer) => {
    console.log('Customer pressed:', customer);
  };

  return (
    <View style={styles.container}>
      {customers.map((customer) => (
        <TouchableOpacity key={customer.id} onPress={() => handlePress(customer)} style={styles.customerContainer}>
          <Text style={styles.customerName}>{customer.name}</Text>
          <Text style={styles.customerEmail}>Email: {customer.email}</Text>
          <Text style={styles.customerPhone}>Phone: {customer.phone}</Text>
          <Text style={styles.customerAddress}>Address: {customer.address.street}, {customer.address.city}, {customer.address.state} {customer.address.zip}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'cyan',
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
});

export default CustomerDetail;