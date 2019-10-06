import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchWheather} from './components/screens'
import { Provider } from 'react-redux';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <SearchWheather/>
    </Provider>
  );
}

export default App;
