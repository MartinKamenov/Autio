import { UPDATE_LANGUAGE } from './actionTypes';
import initialState from './initialState';

export default (state = initialState, action: {
    type: string,
    payload: string | undefined,
}) => {
    switch(action.type) {
        case UPDATE_LANGUAGE: {
            return {...state, languageKey: action.payload};
        }
        default: {
            return {...state};
        }
    }
}