import React from 'react';
import { View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the CRM App!</Text>
      <Button
        title="Go to Customer List"
        onPress={() => navigation.navigate('CustomerList')}
      />
    </View>
  );
}
