import React from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import * as COLORS from '../../../constants/colors';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div className='navbar-container'
            style={{
                height: NAVBAR_HEIGHT,
                backgroundColor: COLORS.NAVBAR_BG_COLOR
            }}>
            <div className='left-align'>
                <a href='/home'>
                    <img src='/assets/logo.png' alt='autio'/>
                </a>
            </div>
            <div className='right-align'>
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
            </div>
        </div>
    );
}

export default Navbar;