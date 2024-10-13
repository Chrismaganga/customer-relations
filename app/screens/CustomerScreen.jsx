import React from 'react';
import { View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to customer relaions app</Text>
      <Button title="View Customers" onPress={() => navigation.navigate('CustomerList')} />
    </View>
  );
}

