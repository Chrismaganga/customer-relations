import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export default function Button({ onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 10, backgroundColor: 'blue' }}>
        <Text style={{ color: 'white' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
