import {combineReducers} from 'redux';
import languageReducer from '../services/translations/reducer';

export default combineReducers({
    language: languageReducer
});