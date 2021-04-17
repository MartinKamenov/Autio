import React from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import './HomeWallpaper.scss';
import { Dropdown } from '../../base';

const HomeWallpaper: React.FC = () => {
    return (
        <div className='home-wallpaper-container' style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT})`
        }}>
            <img className='home-wallpaper-image' style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT})`
        }} alt='home-wallpaper' src='https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
            <div className='home-content-container'>
                <h1>A website for finding reviews and technical information about all car models</h1>
                <div className='content-row'>
                    <Dropdown
                        className='element'
                        options={['Brand', 'Audi', 'BMW', 'Mercedess']}
                        value={'Brand'}
                        onChange={() => {}}/>
                    <Dropdown
                        className='element'
                        options={['Model', 'A3', 'A4', 'A5']}
                        value={'Model'}
                        onChange={() => {}}/>
                    <div className='btn btn-success element'>
                        Find car
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeWallpaper;
