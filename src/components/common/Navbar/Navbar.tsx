import React from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import './Navbar.scss';

const Navbar: React.FC = () => {
    return (
        <div className='navbar-container' style={{height: NAVBAR_HEIGHT}}>
            <div className='left-align'>
                <a href='/home'>
                    <img src='/assets/logo.png' alt='autio'/>
                </a>
            </div>
        </div>
    );
}

export default Navbar;