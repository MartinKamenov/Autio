import React from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import './Navbar.scss';

const Navbar: React.FC = () => {
    return (
        <div className='navbar-container' style={{height: NAVBAR_HEIGHT}}>Navbar</div>
    );
}

export default Navbar;