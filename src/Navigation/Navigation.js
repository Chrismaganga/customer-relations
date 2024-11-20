import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../screens/Welcome';
import CustomerList from '../screens/CustomerList';
import CustomerDetail from '../screens/CustomerDetail';
import RegionList from '../screens/RegionList';
import RegionDetail from '../screens/RegionDetail';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Welcome"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Welcome') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'CustomerList') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'CustomerDetail') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'RegionList') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'RegionDetail') {
              iconName = focused ? 'pin' : 'pin-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: styles.tabBar,
        })}
      >
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="CustomerList" component={CustomerList} />
        <Tab.Screen name="CustomerDetail" component={CustomerDetail} />
        <Tab.Screen name="RegionList" component={RegionList} />
        <Tab.Screen name="RegionDetail" component={RegionDetail} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f3f',
    
  },
  tabBar: {
    backgroundColor: 'blue', 
  },
});

export default Navigation;
