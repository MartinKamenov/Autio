import {combineReducers} from 'redux';
import {default as enumsReducer} from '../services/useEnums/reducer';
import languageReducer from '../services/translations/reducer';

export default combineReducers({
    language: languageReducer,
    enums: enumsReducer
});