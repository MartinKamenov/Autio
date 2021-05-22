import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { MainRouter } from './components/routing';
import { store } from './redux';
import 'bootstrap/dist/css/bootstrap.css';
import UserProvider from './services/user/UserProvider';

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <MainRouter/>
      </UserProvider>
    </Provider>
  );
}

export default App;
