import React from 'react';
import './InformationSection.scss';

export const InformationSection = () => {
    return (
        <>
            <div className="info-container">
                <div className="image">
                    <img src="/assets/Group 3.png" alt='Looking for a new car?' />
                </div>
                <div className="text-container">
                    <h1 className="title">Looking for a new car?</h1>
                    <div>We have just the tool for you! <br />Autio allows you to see all the information you need about <br /> every car you may be considering
                 or just want to look up. You <br /> can also read through informative reviews from real owners to <br /> help you make the best choice!</div>
                </div>
            </div>
            <div className="bottom-info-container" style={{ justifyContent: "flex-end"}}>                
                <div className="left-text">
                    <h1 className="bottom-title">For the passionate <br /> car enthusiast</h1>
                    <div className="bottom-text">Autio is for all you car lovers out there, <br /> who love to stay up to date with the latest releases <br /> and innovations
                    in the industry. We have a huge car database <br /> to make sure that you'll find the model you're looking for!</div>
                </div>
                <div className="image">
                    <img src="/assets/Group 2.png" alt='For passionate car enthusiast' />
                </div>
            </div>
        </>
    )
}