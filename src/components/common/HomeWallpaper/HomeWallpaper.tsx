import React from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import './HomeWallpaper.scss';
import { Dropdown } from '../../base';
import AutoCompleteSearch from '../../base/AutoCompleteSearch';
import { PolygonSeparator } from '../../base';
import * as COLORS from '../../../constants/colors';

const HomeWallpaper: React.FC = () => {
    return (
        <div className='home-wallpaper-container'>
            <div className='images-row'>
                <img src='/assets/wallpaper1.jpg' alt='audi'/>
                <img src='/assets/wallpaper2.jpg' alt='bmw'/>
                <img src='/assets/wallpaper3.jpg' alt='lamborghini'/>
                
                <div className='image-overlay'/>
            </div>
            <PolygonSeparator
                style={{
                    backgroundColor: COLORS.FONT
                }} className='home-wallpaper-separator'/>
            <div className='polygon-content'>
                <h1 className={"primaryHeader"} ><b>OR</b></h1>
                <h5 style={{color: COLORS.NAVBAR_BG_COLOR}}>search by specific parameters</h5>
            </div>
            <div className='home-content-container'>
                <h1><b>Search by key word</b></h1>
                <div className='description'>
                    Search any car-related word you want and find a list of relevant cars
                    and everything you need to know about them!
                    <br/>
                    Including reviews from real owners!
                </div>
                <AutoCompleteSearch
                    className='auto-complete'
                    apiWrapperUrl='/search'
                    placeholder='For example: Audi A4, 3TDI, automatic, sedan...'/>
            </div>
        </div>
    );
}

export default HomeWallpaper;
