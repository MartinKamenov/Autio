import React, { CSSProperties } from 'react';

export interface ImageProps {
    imageHref: string,
    style: {
        width?: string | number;
        aspectRatio?: string;
        height?: string | number;
    } & CSSProperties,
    onClick?: (params: any) => any,
    className?: string
}
 
const Image: React.FC<ImageProps> = ({
    imageHref,
    style,
    onClick,
    className=''
}: ImageProps) => (
    <div style={{
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        borderRadius: 0,
        backgroundImage: `url(${imageHref})`,
        ...style
    }}
    className={className}
    onClick={onClick}/>
);
 
export default Image;