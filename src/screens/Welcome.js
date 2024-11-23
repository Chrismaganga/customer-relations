import React, { useEffect } from 'react';
import { Animated, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Navbar = ({ fadeAnim }) => {
  const icons = [
    { name: 'facebook', url: 'https://www.facebook.com' },
    { name: 'twitter', url: 'https://www.twitter.com' },
    { name: 'instagram', url: 'https://www.instagram.com' },
    { name: 'linkedin', url: 'https://www.linkedin.com' },
  ];

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10, backgroundColor: 'lightgray' }}>
      <Text style={{ fontSize: 20 }}><Ionicons name="logo-slack" size={24} color="blue" /></Text>
      <View style={{ flexDirection: 'row' }}>
        {icons.map((icon, index) => (
          <TouchableOpacity key={index} onPress={() => Linking.openURL(icon.url)}>
            <Animated.View
              style={{
                opacity: fadeAnim,
                transform: [{ scale: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] }) }],
                marginHorizontal: 10,
              }}
            >
              <FontAwesome name={icon.name} size={24} color="blue" />
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Welcome = () => {
  const fadeAnim = new Animated.Value(0); // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={{ flex: 1 }}>
      <Navbar fadeAnim={fadeAnim} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.View
          style={{
            width: 400,
            padding: 20,
            backgroundColor: 'powderblue',
            opacity: fadeAnim, // Bind opacity to animated value
          }}
        >
          <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 20 }}>
            Customer Relations
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 10 }}>
            customers and their regions in relationship to the company's products and services.
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default Welcome;
