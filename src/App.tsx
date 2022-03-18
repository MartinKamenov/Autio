import React, { useState } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { MainRouter } from './components/routing';
import { store } from './redux';
import UserProvider from './services/user/UserProvider';
import Dialog from './components/common/Dialog';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div>Hello world</div>
            {counter}
            <button onClick={() => setCounter(counter + 1)}> Increment </button>
            <button onClick={() => setCounter(counter - 1)}> Decrement </button>
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
