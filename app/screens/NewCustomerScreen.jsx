import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customers/Reducer';

export default function NewCustomerScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addCustomer({ id: Date.now(), name, email }));
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Add Customer" onPress={handleSubmit} />
    </View>
  );
}
