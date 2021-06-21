import React from 'react';
import './Dialog.scss';
import { useSelector, useDispatch } from 'react-redux';
import { SLIDESHOW_DIALOG } from './dialogTypes';
//import ReactFullscreenSlideshow from 'react-fullscreen-slideshow';
import { Icon } from '../../base';
import { closeDialog as closeDialogAction } from './actions';
import SlideshowDialog from './SlideshowDialog';
 
const Dialog: React.FC = () => {
    const {
        open,
        component,
        params
    } = useSelector((globalState: any) => globalState.dialog);

    const dispatch = useDispatch();

    const getDialogContentComponent = () => {
        switch(component) {
        case SLIDESHOW_DIALOG: {
            return <SlideshowDialog {...params}/>;
        }
        default: {
            return null;
        }
        }
    };

    const closeDialog = () => {
        dispatch(closeDialogAction());
    };

    if(!open) {
        return null;
    }

    return (
        <div className='dialog-container'>
            <div className='top-right-actions'>
                <Icon icon='delete' onClick={closeDialog} className='close-icon'/>
            </div>
            {getDialogContentComponent()}
        </div>
    );
};
 
export default Dialog;