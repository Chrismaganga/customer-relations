import { configureStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// Set up store using configureStore
const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware), 
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;