import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { MainRouter } from './components/routing';
import { store } from './redux';
import UserProvider from './services/user/UserProvider';
import Dialog from './components/common/Dialog';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <>
            <div>Hello world</div>
            <Provider store={store}>
                <UserProvider>
                    <Dialog/>
                    <MainRouter/>
                </UserProvider>
            </Provider>
            <div>Goodbay world</div>
        </>
    );
}

export default App;
