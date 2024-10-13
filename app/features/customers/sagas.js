import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchCustomersSuccess, fetchCustomersFailure } from './actions';
import { getCustomers } from './service'; 

// Worker saga: will be fired on FETCH_CUSTOMERS actions
function* fetchCustomers() {
  try {
    const customers = yield call(getCustomers);
    yield put(fetchCustomersSuccess(customers));
  } catch (error) {
    yield put(fetchCustomersFailure(error.message));
  }
}

// Watcher saga: spawns a new fetchCustomers task on each FETCH_CUSTOMERS
export function* watchFetchCustomers() {
  yield takeEvery('FETCH_CUSTOMERS', fetchCustomers);
}
