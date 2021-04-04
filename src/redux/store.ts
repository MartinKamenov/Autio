import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
//import requestMiddleware from './middlewares/request.middleware';

const store = createStore(reducers, /*applyMiddleware(requestMiddleware)*/);

export default store;