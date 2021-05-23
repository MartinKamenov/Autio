import {combineReducers} from 'redux';
import languageReducer from '../services/translations/reducer';
import userReducer from '../services/user/reducer';
import {default as enumsReducer} from '../services/useEnums/reducer';

export default combineReducers({
    language: languageReducer,
    user: userReducer,
    enums: enumsReducer
});