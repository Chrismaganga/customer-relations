import { all } from 'redux-saga/effects';
import { watchFetchCustomers } from '../features/customers/sagas'; // Import your customer saga

export default function* rootSaga() {
  yield all([
    watchFetchCustomers(), // Add other sagas here as needed
  ]);
}
