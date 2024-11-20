import { takeEvery, call, put } from 'redux-saga/effects';
import { addCustomer } from '../customerSlice';
import { fetchCustomers } from '../services';

function* handleFetchCustomers() {
  try {
    const customers = yield call(fetchCustomers);
    yield put(addCustomer(customers));
  } catch (error) {
    console.error(error);
  }
}

export default function* customerSagas() {
  yield takeEvery('customers/fetch', handleFetchCustomers);
}
