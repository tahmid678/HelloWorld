import React from 'react';
import MainComponent from './src/MainComponent';
import Store from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={Store}>
      <MainComponent />
    </Provider>
  )
}


