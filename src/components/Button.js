import React, { useState } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

export default function Button() {
  const [user, setUser] = useState('')

  return (
    <View style={styles.container}>
      <Button
        title={'welcome to the modern customer app!'}
        onPress={() => {
          setUser('Chris')
        }}
      />
      <Text style={styles.text}>{`User: ${user}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
})