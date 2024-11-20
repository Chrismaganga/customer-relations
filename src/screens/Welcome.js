import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CRM</Text>
      <Button title="View Customers" onPress={() => navigation.navigate('CustomerList')} />
      <Button title="View Regions" onPress={() => navigation.navigate('RegionList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Welcome;
