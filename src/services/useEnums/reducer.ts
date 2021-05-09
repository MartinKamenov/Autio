import initialState from './initialState';
import * as ACTION_TYPES from './actionTypes';

const reducer = (state = initialState, action: {
    type: string,
    payload: any,
    brandsMapper?: {
        [key: string]: string
    }
}) => {
    const stateCopy = {...state};
    switch (action.type) {
        case ACTION_TYPES.GET_ENUMS: {
            return {...stateCopy, loading: true}
        }
        case ACTION_TYPES.GET_ENUMS_SUCCESS: {
            return {
                ...stateCopy,
                loading: false,
                enums: action.payload,
                fetched: true,
                mappers: {
                    ...stateCopy.mappers,
                    brandsMapper: action.brandsMapper
                }
            };
        }
        case ACTION_TYPES.GET_ENUMS_FAILURE: {
            return {...stateCopy, loading: false, error: action.payload} 
        }
        default: {
            return stateCopy;
        }
    }
}

export default reducer;