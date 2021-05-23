import {
    fetchUser,
    fetchUserSuccess,
    setNoTokenState,
    setUserToken,
    loginUser,
    loginUserSuccess,
    registerUser,
    registerUserSuccess
} from './actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { getItem, setItem } from '../localStorage';
import { getData, postData } from '../apiService';

const USER_KEY = 'USER_KEY';

const useUser = () => {
    const {
        loading,
        user,
        token,
        initialyFetched
    } = useSelector((globalState: any) => globalState.user);

    const dispatch = useDispatch();

    const fetchLoginState = useCallback(async() => {
        dispatch(fetchUser());
        const user: any = await getData('/users/loginState');
        dispatch(fetchUserSuccess(user));
    }, [dispatch]);

    useEffect(() => {
        if(initialyFetched) {
            return;
        }

        const token = getItem(USER_KEY);
        dispatch(token ? setUserToken(token) : setNoTokenState());

        if(!token) {
            return;
        }

        fetchLoginState();
    }, [initialyFetched, dispatch, fetchLoginState]);

    const register = async(user: {
        email: string,
        password: string
    }) => {
        dispatch(registerUser());

        const payload: any = postData('/user', user);
        setItem(USER_KEY, payload.token);

        dispatch(registerUserSuccess(payload));
    };

    const login = async(user: {
        email: string,
        password: string
    }) => {
        dispatch(loginUser());

        const payload: any = postData('/user', user);
        setItem(USER_KEY, payload.token);

        dispatch(loginUserSuccess(payload));
    };

    return {
        loading,
        user,
        initialyFetched,
        token,
        login,
        register
    };
};

export default useUser;