import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/WelcomeScreen';
import SettingsScreen from '../screens/CustomerListScreen';
import {Image} from 'react-native';

import CustomerScreen from '../screens/CustomerScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CustomerListScreen from '../screens/CustomerListScreen';


const Tab = createBottomTabNavigator();

const icons = {
  welcome: require('../assets/welcome.png'),
  customerlist: require ('../assets/customerlist.png'),
  customer: require('../assets/customer.png'),
};

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.welcome}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CustomerList"
        component={CustomerListScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.customerlist}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Customer"
        component={CustomerScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.customer}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
