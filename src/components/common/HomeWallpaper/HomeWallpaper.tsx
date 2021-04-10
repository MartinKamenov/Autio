import React from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import './HomeWallpaper.scss';

const HomeWallpaper: React.FC = () => {
    return (
        <div className='home-wallpaper-container' style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT})`
        }}>
            <img className='home-wallpaper-image' style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT})`
        }} alt='home-wallpaper' src='/wallpaper.jpg'/>
        </div>
    );
}

export default HomeWallpaper;
