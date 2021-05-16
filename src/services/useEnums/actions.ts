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

    const brandsMapper = reducedData.brands.reduce((acc: any, curr: any) =>
        ({...acc, [curr.shortName]: curr.name}), {});

    return {
        type: ACTION_TYPES.GET_ENUMS_SUCCESS,
        payload: reducedData,
        brandsMapper
    }
};

export const getEnumsFailure = (payload: any) => ({
    type: ACTION_TYPES.GET_ENUMS_FAILURE,
    payload
});
