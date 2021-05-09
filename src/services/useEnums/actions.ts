import { EnumDataResult } from './types';
import * as ACTION_TYPES from './actionTypes';

export const getEnums = () => ({
    type: ACTION_TYPES.GET_ENUMS
});

export const getEnumsSuccess = (payload: EnumDataResult[]) => {
    const reducedData = payload
        .reduce((
            acc: any,
            cur: {id: string, values: EnumDataResult['values']}
        ) => ({...acc, [cur.id]: cur.values}), {});

    return {
        type: ACTION_TYPES.GET_ENUMS_SUCCESS,
        payload: reducedData
    }
};

export const getEnumsFailure = (payload: any) => ({
    type: ACTION_TYPES.GET_ENUMS_FAILURE,
    payload
});