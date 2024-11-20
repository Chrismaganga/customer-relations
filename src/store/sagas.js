import { all } from 'redux-saga/effects';
import customerSagas from '../features/components/Customer/sagas/customerSagas';
import regionSagas from '../features/components/Region/sagas/regionSagas';

export default function* rootSaga() {
  yield all([
    customerSagas(),
    regionSagas(),
  ]);
}
