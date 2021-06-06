/* eslint-disable quotes */
import React from 'react';
import styled from "styled-components";
import * as COLORS from '../../../constants/colors';

export interface PolygonSeparatorProps {
    style: {
        backgroundColor: string;
    };
    className?: string;
}

export const PolygonSeparator: React.FC<PolygonSeparatorProps> = ({
    style,
    className=''
}: PolygonSeparatorProps) => (
    <div style={{
        clipPath: 'polygon(0 0, 100% 0%, 100% 30%, 0% 100%)',
        width: '100%',
        height: 200,
        ...style
    }} className={className}/>
);

export const MainButton = styled.button`
    background-color: ${COLORS.ALTERNATIVE_FONT};
    color: ${COLORS.WHITE};
    border: none;
    padding: 10px;
    border-radius: 2px;
`;
