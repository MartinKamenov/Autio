import React from 'react';

export interface ImageProps {
    imageHref: string,
    style: {
        width?: string | number;
        aspectRatio?: string;
        height?: string | number;
    }
}
 
const Image: React.FC<ImageProps> = ({
    imageHref,
    style
}: ImageProps) => (
    <div style={{
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        borderRadius: 0,
        backgroundImage: `url(${imageHref})`,
        ...style
    }}/>
);
 
export default Image;