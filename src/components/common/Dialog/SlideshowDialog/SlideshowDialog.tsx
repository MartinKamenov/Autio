import React, { useState } from 'react';
import { Icon } from '../../../base';
import './SlideshowDialog.scss';
import useWindowDimensions from '../../../../services/useWindowDimensions';

export interface SlideshowDialogProps {
    images: string[],
    initialIndex?: number
}
 
const SlideshowDialog: React.FC<SlideshowDialogProps> = ({
    images,
    initialIndex=0
}: SlideshowDialogProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const {width, height} = useWindowDimensions();
    const selectedImagesStyle = width > height ? {
        height: '90%'
    } : {
        width: '90%'
    };

    return (
        <div className='slideshow-dialog'>
            <img src={images[currentIndex]}
                style={selectedImagesStyle}
                alt='index'
                className='selected-image'/>
            <div style={{position: 'fixed', top: '47vh', left: 0}}>
                <Icon
                    icon='chevron-left'
                    className='chevron'
                    onClick={() => {
                        setCurrentIndex((currentIndex + (images.length - 1)) %
                        images.length);
                    }}/>
            </div>
            <div style={{position: 'fixed', top: '47vh', right: 0}}>
                <Icon
                    icon='chevron-right'
                    className='chevron'
                    onClick={() => {
                        setCurrentIndex((currentIndex + 1) %
                        images.length);
                    }}/>
            </div>
        </div>
    );
};
 
export default SlideshowDialog;