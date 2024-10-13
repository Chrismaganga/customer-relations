import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

export default function CustomerDetailScreen({ route, navigation }) {
  const { customerId } = route.params;
  
  // Select the specific customer based on the passed customerId
  const customer = useSelector((state) =>
    state.customers.find((cust) => cust.id === customerId)
  );

  if (!customer) {
    return (
      <View>
        <Text>Customer not found!</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Customer Details</Text>
      <Text>Name: {customer.name}</Text>
      <Text>Email: {customer.email}</Text>
      <Text>Phone: {customer.phone}</Text>
      <Text>Address: {customer.address}</Text>
      
      <Button
        title="Edit Customer"
        onPress={() => navigation.navigate('EditCustomer', { customerId })}
      />
      <Button title="Back to Customer List" onPress={() => navigation.goBack()} />
    </View>
  );
}
