import React from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import * as COLORS from '../../../constants/colors';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { Dropdown, LoadingIndicator } from '../../base';
import { useTranslation, languageKeys } from '../../../services/translations';
import { useUser } from '../../../services/user';

const Navbar: React.FC = () => {
    const {t, setLanguage, languageKey} = useTranslation();
    const {loading, user} = useUser();

    return (
        <div className='navbar-container'
            style={{
                height: NAVBAR_HEIGHT,
                backgroundColor: COLORS.NAVBAR_BG_COLOR
            }}>
            <div className='left-align'>
                <Link to='/home'>
                    <img src='/assets/logo.png' alt='autio'/>
                </Link>
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
                    {loading ? (
                        <LoadingIndicator width={25}/>
                    ) : user ? (
                        <div>{user.email}</div>
                    ) : (
                        <Link to='/login' className='nav-element-alternative'
                            style={{color: COLORS.ALTERNATIVE_FONT}}>
                            {t(languageKeys.navbar.login)}
                        </Link>
                    )}
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
};

export default Navbar;