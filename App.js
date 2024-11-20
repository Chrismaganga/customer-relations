import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store.js';
import Navigation from './src/Navigation/Navigation.js';
import {NavigationContainer} from '@react-navigation/native';


const App = () => {
  return (
   
    <Provider store={store}>
      <NavigationContainer>
      <Navigation/>
      </NavigationContainer>
    </Provider>

  );
};

export default App;
