import React from 'react';
import './InformationSection.scss';
import { useTranslation, languageKeys } from '../../../services/translations';

export const InformationSection = () => {
    const { t } = useTranslation();
    return (
        <div className='information-section-container'>
            <div className="info-container">
                <div className="image">
                    <img src="/assets/Group 3.png" alt='Looking for a new car?' />
                </div>
                <div className="text-container">
                    <h1 className="title">{t(languageKeys.informationSection.header1)}</h1>
                    <div>{t(languageKeys.informationSection.description1.description1Part1)}<br />
                        {t(languageKeys.informationSection.description1.description1Part2)}
                        <br />
                        {t(languageKeys.informationSection.description1.description1Part3)}
                        {t(languageKeys.informationSection.description1.description1Part4)}
                        <br />
                        {t(languageKeys.informationSection.description1.description1Part5)}
                        <br /> {t(languageKeys.informationSection.description1.description1Part6)}</div>
                </div>
            </div>
            <div className="bottom-info-container" style={{ justifyContent: 'flex-end' }}>
                <div className="left-text">
                    <h1 className="bottom-title">{t(languageKeys.informationSection.header2Part1)}
                        <br />
                        {t(languageKeys.informationSection.header2Part2)}
                    </h1>
                    <div className="bottom-text">
                        {t(languageKeys.informationSection.description2.description2Part1)}
                        <br />
                        {t(languageKeys.informationSection.description2.description2Part2)}
                        <br /> {t(languageKeys.informationSection.description2.description2Part3)}
                        <br />{t(languageKeys.informationSection.description2.description2Part4)}
                    </div>
                </div>
                <div className="image">
                    <img src="/assets/Group 2.png" alt='For passionate car enthusiast' />
                </div>
            </div>
        </div>
    );
};