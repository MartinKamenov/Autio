import React from 'react';
import './Card.scss';

export interface CardProps {
    imageHref: string,
    content: Function,
    className?: string,
    style?: object
}
 
const Card: React.FC<CardProps> = ({
    imageHref,
    content,
    className='',
    style={}
}) => {
    const ContentNode = content;
    return (
        <div className={`custom-card-container ${className}`} style={style}>
            <div style={{
                width: '100%',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                borderRadius: 0,
                backgroundImage: `url(${imageHref})`
            }}/>
            <div className='container-wrapper'>
                <ContentNode/>
            </div>
        </div>
    );
}
 
export default Card;