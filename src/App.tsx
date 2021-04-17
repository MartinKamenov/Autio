import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { MainRouter } from './components/routing';
import { store } from './redux';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Provider store={store}>
      <MainRouter/>
    </Provider>
  );
}

export default App;
