import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Animated, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Welcome = () => {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0); // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

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
                <FontAwesome name={icon.name} size={24} color="black" />
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar fadeAnim={fadeAnim} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.View
          style={{
            width: 400,
            padding: 20,
            backgroundColor: 'powderblue',
            opacity: fadeAnim,
          }}
        >
          <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 20 }}>
            {'Welcome to Customer Manager Plus'}
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 10 }}>
            <FontAwesome name="info-circle" size={24} color="blue" />
            {' customers and their regions in relationship to the company\'s products and services.'}
          </Text>
        </Animated.View>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity style={{ padding: 10, backgroundColor: 'cyan', borderRadius: 9, marginVertical: 10, width: 200 }} onPress={() => navigation.navigate('RegionList')}>
            <Text style={{ color: 'blue', textAlign: 'center' }}>RegionList</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, backgroundColor: 'cyan', borderRadius: 9, marginVertical: 10, width: 200 }} onPress={() => navigation.navigate('Create')}>
            <Text style={{ color: 'blue', textAlign: 'center' }}>Create</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Welcome;
