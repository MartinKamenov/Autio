import {combineReducers} from 'redux';
import languageReducer from '../services/translations/reducer';
import userReducer from '../services/user/reducer';
import {default as enumsReducer} from '../services/useEnums/reducer';
import {default as dialogReducer} from '../components/common/Dialog/reducer';

export default combineReducers({
    language: languageReducer,
    user: userReducer,
    enums: enumsReducer,
    dialog: dialogReducer
});