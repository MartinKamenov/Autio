import * as actionTypes from './actionTypes';
import { SLIDESHOW_DIALOG } from './dialogTypes';

export const openSlideshowDialog = (params: any) => ({
    type: actionTypes.SHOW_DIALOG,
    payload: {
        component: SLIDESHOW_DIALOG,
        params
    }
});

export const closeDialog = () => ({
    type: actionTypes.CLOSE_DIALOG
});