import { User } from './types';
import * as actionTypes from './actionTypes';

export const fetchUser = () => ({
    type: actionTypes.FETCH_USER
});

export const fetchUserSuccess = (payload: {
    user: User
}) => ({
    type: actionTypes.FETCH_USER_SUCCESS,
    payload
});

export const loginUser = () => ({
    type: actionTypes.LOGIN_USER
});

export const loginUserSuccess = (payload: {
    user: User,
    token: string
}) => ({
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload
});

export const registerUser = () => ({
    type: actionTypes.REGISTER_USER
});

export const registerUserSuccess = (payload: {
    user: User,
    token: string
}) => ({
    type: actionTypes.REGISTER_USER_SUCCESS,
    payload
});

export const setNoTokenState = () => ({
    type: actionTypes.NO_USER_TOKEN
});

export const updateUser = () => ({
    type: actionTypes.UPDATE_USER
});

export const updateUserSuccess = (payload: {
    user: User,
    token: string
}) => ({
    type: actionTypes.UPDATE_USER_SUCCESS,
    payload
});

export const setUserToken = (token: string) => ({
    type: actionTypes.SET_USER_TOKEN,
    payload: token
});
