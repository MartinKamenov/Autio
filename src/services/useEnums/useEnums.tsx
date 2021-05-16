import { useEffect } from 'react';
import {getEnums, getEnumsSuccess, getEnumsFailure} from './actions';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../apiService';
import { EnumsState } from './types';
 
const useEnums = (): EnumsState => {
    const {
        loading,
        enums,
        fetched,
        error,
        mappers,
    } = useSelector((globalState: any) => globalState.enums);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!fetched) {
            dispatch(getEnums());

            getData('/enums').then(({data}) => {
                dispatch(getEnumsSuccess(data));
            }).catch((er) => {
                dispatch(getEnumsFailure(er.message));
            });
        }
    }, [fetched, dispatch]);

    return {
        loading,
        enums,
        mappers,
        fetched,
        error,
    };
}
 
export default useEnums;