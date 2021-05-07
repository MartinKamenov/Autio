import React from 'react';
import './InformationSection.scss';

export const InformationSection = () => {
    return (
        <div className="info-container">
            <div className="image">
                <img src="/assets/Group 3.png"></img>
            </div>
            <div className="text-container">
                <h1 className="title">Looking for a new car?</h1>
                <div>We have just the tool for you! <br />Autio allows you to see all the information you need about <br /> every car you may be considering
                 or just want to look up. You <br /> can also read through informative reviews from real owners to <br /> help you make the best choice!</div>
            </div>
        </div>
    )
}