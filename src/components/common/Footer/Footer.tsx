import React from 'react';
import './Footer.scss';
import { PolygonSeparator } from '../../base';
import * as COLORS from '../../../constants/colors';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import { Link } from 'react-router-dom';
import { useTranslation, languageKeys } from '../../../services/translations';

const Footer: React.FC = () => {
    const {t} = useTranslation();

    return (
        <footer className='footer-container' style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT})`
        }}>
            <PolygonSeparator style={{
                backgroundColor: COLORS.ALTERNATIVE_FONT
            }}/>
            <img className='logo' src='/assets/logo.png' alt='autio-home'/>
            <nav>
                <Link to='/home' className='nav-element'
                    style={{color: COLORS.FONT}}>
                    {t(languageKeys.navbar.home)}
                </Link>
            </nav>
            <nav>
                <Link to='/brands' className='nav-element'
                    style={{color: COLORS.FONT}}>
                    {t(languageKeys.navbar.brands)}
                </Link>
            </nav>
            <nav>
                <Link to='/trending' className='nav-element'
                    style={{color: COLORS.FONT}}>
                    {t(languageKeys.navbar.trending)}
                </Link>
            </nav>
            <nav>
                <Link to='/about' className='nav-element'
                    style={{color: COLORS.FONT}}>
                    {t(languageKeys.navbar.about)}
                </Link>
            </nav>
            <nav>
                <Link to='/login' className='nav-element-alternative'
                    style={{color: COLORS.ALTERNATIVE_FONT}}>
                    {t(languageKeys.navbar.login)}
                </Link>
            </nav>
            <nav className='contact-information'>
                <div className='email'>autio_support@gmail.com</div>
                <div>Terms of service | Privacy policy</div>
                <div className='separator'/>
            </nav>
        </footer>
    );
}

export default Footer;