import React from 'react';

export interface PolygonSeparatorProps {
    style: {
        backgroundColor: string;
    };
    className?: string;
}

export const PolygonSeparator: React.FC<PolygonSeparatorProps> = ({
    style,
    className=''
}) => (
    <div style={{
        clipPath: 'polygon(0 0, 100% 0%, 100% 30%, 0% 100%)',
        width: '100%',
        height: 200,
        ...style
    }} className={className}/>
);
