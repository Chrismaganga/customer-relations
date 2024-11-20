import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const CustomerList = () => {
  const customers = useSelector((state) => state.customers);

  const handlePress = (customer) => {
    console.log('Customer pressed:', customer);
  };

  return (
    <View style={styles.container}>
      {customers.map((customer) => (
        <TouchableOpacity key={customer.id} onPress={() => handlePress(customer)} style={styles.customerContainer}>
          <Text style={styles.customerName}>{customer.name}</Text>
          
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
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    backgroundColor: 'cyan',
    padding: 10,
    textAlign: 'center',
  },
});

export default CustomerList;