import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainTabs from './navigation/MainTabs'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './store'

const index = () => {
  return (
    <Provider store={store}>
    <NavigationContainer independent={true}><
      MainTabs />
    </NavigationContainer>
    </Provider>
  )
}

export default index

const styles = StyleSheet.create({})