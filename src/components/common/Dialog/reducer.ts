import * as actionTypes from './actionTypes';
import initialState from './initialState';

const reducer = (state=initialState, action: {
    type: string,
    payload?: any
}) => {
    switch(action.type) {
    case actionTypes.SHOW_DIALOG: {
        const {component, params} = action.payload;
        return {
            open: true,
            component,
            params
        };
    }
    case actionTypes.CLOSE_DIALOG: {
        return {
            ...initialState,
            open: false
        };
    }
    default: {
        return {...state};
    }
    }
};

export default reducer;