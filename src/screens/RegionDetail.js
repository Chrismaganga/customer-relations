import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const RegionDetail = () => {
  const customers = useSelector((state) => state.customers);

  const handlePress = (customer) => {
    console.log('Customer pressed:', customer);
  };

  return (
    <View style={styles.container}>
      {customers.map((customer) => (
        <TouchableOpacity key={customer.id} onPress={() => handlePress(customer)} style={styles.customerContainer}>
          <Text>Address: {customer.address.street}, {customer.address.city}, {customer.address.state} {customer.address.zip}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10,
    backgroundColor: 'cyan',
  },
  customerContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegionDetail;