import * as actionTypes from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action: {
    type: string,
    payload: any
}) => {
    switch(action.type) {
        case actionTypes.FETCH_USER: {
            return {...state, loading: true};
        }
        case actionTypes.FETCH_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.payload,
                initialyFetched: true
            };
        }
        case actionTypes.LOGIN_USER: {
            return {...state, loading: true};
        }
        case actionTypes.LOGIN_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.token
            }
        }
        case actionTypes.REGISTER_USER: {
            return {...state, loading: true};
        }
        case actionTypes.REGISTER_USER_SUCCESS: {
            return {
                ...state,
                loading: true,
                user: action.payload.user,
                token: action.payload.token
            };
        }
        case actionTypes.SET_USER_TOKEN: {
            return {
                ...state,
                token: action.payload
            };
        }
        case actionTypes.NO_USER_TOKEN: {
            return {
                ...state,
                token: '',
                initialyFetched: true
            }
        }
        default: {
            return {...state};
        }
    }
};

export default reducer;