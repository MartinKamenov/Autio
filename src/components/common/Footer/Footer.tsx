import React from 'react';
import './Footer.scss';
import { PolygonSeparator } from '../../base';
import * as COLORS from '../../../constants/colors';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
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
                    Home
                </Link>
            </nav>
            <nav>
                <Link to='/brands' className='nav-element'
                    style={{color: COLORS.FONT}}>
                    Brands
                </Link>
            </nav>
            <nav>
                <Link to='/trending' className='nav-element'
                    style={{color: COLORS.FONT}}>
                    Trending
                </Link>
            </nav>
            <nav>
                <Link to='/about' className='nav-element'
                    style={{color: COLORS.FONT}}>
                    About
                </Link>
            </nav>
            <nav>
                <Link to='/login' className='nav-element-alternative'
                    style={{color: COLORS.ALTERNATIVE_FONT}}>
                    Login / Sign up
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