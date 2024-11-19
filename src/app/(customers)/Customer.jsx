import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { Stack } from 'expo-router'

const newAllocationiiiScreen = () => {
  return (
    <View>
      <Stack.Screen options={{title: 'Allocation'}}/>
      <Text>New Allocation</Text>
    </View>
  )
}

export default newAllocationScreen

const styles = StyleSheet.create({})