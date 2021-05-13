import React from 'react';
import './HomeWallpaper.scss';
import AutoCompleteSearch from '../../base/AutoCompleteSearch';
import { PolygonSeparator } from '../../base';
import * as COLORS from '../../../constants/colors';
import { useTranslation, languageKeys } from '../../../services/translations';

const HomeWallpaper: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className='home-wallpaper-container'>
            <div className='images-row'>
                <img
                    src='/assets/wallpaper1.jpg'
                    alt='audi'
                    className='medium-visible'/>
                <img
                    src='/assets/wallpaper2.jpg'
                    alt='bmw'/>
                <img
                    src='/assets/wallpaper3.jpg'
                    alt='lamborghini'
                    className='large-visible'/>
                
                <div className='image-overlay'/>
            </div>
            <PolygonSeparator
                style={{
                    backgroundColor: COLORS.FONT
                }} className='home-wallpaper-separator'/>
            <div className='polygon-content'>
                <h1 className={"primaryHeader"} ><b>{t(languageKeys.home.or)}</b></h1>
                <h5 style={{color: COLORS.NAVBAR_BG_COLOR}}>{t(languageKeys.home.searchParams)}</h5>
            </div>
            <div className='home-content-container'>
                <h1><b>{t(languageKeys.home.search_header)}</b></h1>
                <div className='description'>
                    {t(languageKeys.home.searchDescription1)}
                    <br/>
                    {t(languageKeys.home.searchDescription2)}
                </div>
                <AutoCompleteSearch
                    className='auto-complete'
                    apiWrapperUrl='/search'
                    placeholder={t(languageKeys.home.searchPlaceHolder)}/>
            </div>
        </div>
    );
}

export default HomeWallpaper;
