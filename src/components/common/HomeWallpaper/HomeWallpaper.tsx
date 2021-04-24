import React from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import './HomeWallpaper.scss';
import { Dropdown } from '../../base';

const HomeWallpaper: React.FC = () => {
    return (
        <div className='home-wallpaper-container' style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT})`
        }}>
            <div className='images-row' style={{
                height: `calc(100vh - ${NAVBAR_HEIGHT})`
            }}>
                <img src='/assets/wallpaper1.jpg' alt='audi'/>
                <img src='/assets/wallpaper2.jpg' alt='bmw'/>
                <img src='/assets/wallpaper3.jpg' alt='lamborghini'/>
                
                <div className='image-overlay'/>
            </div>
            <div className='home-content-container'>
                <h1>Search by key word</h1>
                <div className='description'>
                    Search any car-related word you want and find a list of relevant cars
                    and everything you need to know about them!
                    <br/>
                    Including reviews from real owners!
                </div>
            </div>
        </div>
    );
}

export default HomeWallpaper;
