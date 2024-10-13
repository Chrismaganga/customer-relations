import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomer } from '../features/customers/Reducer';

export default function EditCustomerScreen({ route, navigation }) {
  const { customerId } = route.params;
  const customer = useSelector((state) =>
    state.customers.find((c) => c.id === customerId)
  );
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(updateCustomer({ id: customerId, name, email }));
    navigation.goBack();
  };

  return (
    <View>
      <TextInput value={name} onChangeText={setName} />
      <TextInput value={email} onChangeText={setEmail} />
      <Button title="Save Changes" onPress={handleSubmit} />
    </View>
  );
}
