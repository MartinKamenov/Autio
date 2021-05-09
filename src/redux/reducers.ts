import {combineReducers} from 'redux';
import {default as enumsReducer} from '../services/useEnums/reducer';

export default combineReducers({
    enums: enumsReducer
});