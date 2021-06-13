import React, { CSSProperties } from 'react';
import './Card.scss';
import { Image } from '..';

export interface CardProps {
    imageHref: string,
    content: () => React.ReactElement,
    className?: string,
    style?: CSSProperties
}
 
const Card: React.FC<CardProps> = ({
    imageHref,
    content,
    className='',
    style={}
}: CardProps) => {
    const ContentNode = content;
    return (
        <div className={`custom-card-container ${className}`} style={style}>
            <Image
                imageHref={imageHref}
                style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                }}/>
            <div className='container-wrapper'>
                <ContentNode/>
            </div>
        </div>
    );
};
 
export default Card;