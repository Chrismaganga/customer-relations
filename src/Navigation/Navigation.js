import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../screens/Welcome';
import CustomerList from '../screens/CustomerList';
import CustomerDetail from '../screens/CustomerDetail';
import RegionList from '../screens/RegionList';
import { Ionicons } from '@expo/vector-icons';
import CreateCustomer from '../screens/CreateCustomer';

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
            } else if (route.name === 'Create') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'RegionList') {
              iconName = focused ? 'map' : 'map-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: styles.tabBar,
          headerTitleAlign: 'center', // Center the header title
        })}
      >
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="CustomerList" component={CustomerList} />
        <Tab.Screen name="CustomerDetail" component={CustomerDetail} />
        <Tab.Screen name="RegionList" component={RegionList} />
        <Tab.Screen name="Create" component={CreateCustomer} />
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
    backgroundColor: 'cyan', 
  },
});

export default Navigation;
