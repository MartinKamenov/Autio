import React from 'react';
import * as COLORS from '../../../constants/colors';
import './SignUpSection.scss';
import { Icon } from '../../base';
import { Link } from 'react-router-dom';
import { useTranslation, languageKeys } from '../../../services/translations';

const SignUpSection: React.FC = () => {
    const {t} = useTranslation();
    const icons = [
        {
            src: '/assets/car.png',
            x: '-150px',
            y: '-80px',
            height: '50px'
        },
        {
            src: '/assets/tools.png',
            x: '-200px',
            y: '120px',
            height: '50px'
        },
        {
            src: '/assets/message.png',
            x: '50%',
            y: '-50px',
            height: '60px'
        },
        {
            src: '/assets/circle.png',
            x: 'calc(50% + 60px)',
            y: '170px',
            height: '20px'
        },
        {
            src: '/assets/tyre.png',
            x: 'calc(50% + 120px)',
            y: '230px',
            height: '70px'
        }
    ];
    return (
        <div className='sign-up-section-wrapper'>
            <h1 style={{ color: COLORS.ALTERNATIVE_FONT }}><b>{t(languageKeys.signUpSection.signUpHeader1)}</b></h1>
            <h4 style={{ color: COLORS.FONT }}>{t(languageKeys.signUpSection.signUpHeader2)}</h4>
            <div className='container'>
                <div className='message-container'>
                    {icons.map((icon, i) => (
                        <img
                            key={i}
                            alt={`not clickable icon ${i + 1}`}
                            src={icon.src}
                            style={{
                                position: 'absolute',
                                opacity: 0.3,
                                height: icon.height,
                                marginLeft: icon.x,
                                marginTop: icon.y
                            }} />
                    ))}
                    <div className='message-point'>
                        <Icon icon='check-circle' className='point-icon' />
                        {t(languageKeys.signUpSection.bulet1)}
                    </div>
                    <div className='message-point'>
                        <Icon icon='check-circle' className='point-icon' />
                        {t(languageKeys.signUpSection.bulet2)}
                    </div>
                    <div className='message-point'>
                        <Icon icon='check-circle' className='point-icon' />
                        {t(languageKeys.signUpSection.bulet3)}
                    </div>
                </div>
                <div className="arrow-container">
                    <Link to="/register">
                        <img src="/assets/Group 1.png" alt='Create an account' />
                        <div className="signup-text">{t(languageKeys.signUpSection.createAnAccount)}</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUpSection;