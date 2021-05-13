import React from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import * as COLORS from '../../../constants/colors';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { Dropdown } from '../../base';
import useTranslation from '../../../services/translations/useTranslation';
import { languageKeys } from '../../../services/translations/languages';

const Navbar: React.FC = () => {
    const {t, setLanguage, languageKey} = useTranslation();

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
                        {t(languageKeys.navbar.brands)}
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
                <nav>
                    <Dropdown options={[{
                            label: 'English',
                            value: 'en'
                        },{
                            label: 'Български',
                            value: 'bg'
                        }]}
                        value={languageKey}
                        onChange={setLanguage}/>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;