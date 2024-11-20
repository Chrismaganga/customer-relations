// import { takeEvery, call, put } from 'redux-saga/effects';
// import { fetchRegions } from '../services';
// import { addRegions, setRegionsError } from '../Reducers';


// function* handleFetchRegions() {
//   try {

//     const regions = yield call(fetchRegions);

//     // Dispatch an action to update the Redux store with the fetched regions
//     yield put(addRegions(regions));
//   } catch (error) {
//     // Dispatch an error action if fetching fails
//     console.error('Error fetching regions:', error);
//     yield put(setRegionsError(error.message));
//   }
// }

// // Watcher saga: Watches for actions dispatched to the store and starts worker saga
// export default function* regionSagas() {
//   yield takeEvery('regions/fetchRegions', handleFetchRegions);
// }
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const regionSagas = () => {
  return (
    <View>
      <Text>regionSagas</Text>
    </View>
  )
}

export default regionSagas

const styles = StyleSheet.create({})