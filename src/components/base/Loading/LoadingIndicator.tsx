import React, { CSSProperties } from 'react';
import Spinner from 'react-loader-spinner';
import * as COLORS from '../../../constants/colors';

export interface LoadingIndicatorProps {
    message?: string;
    style?: CSSProperties;
    className?: string;
    width?: number
}
 
const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
    message,
    className='',
    style={},
    width=50
}: LoadingIndicatorProps) => {
    return (
        <div style={style} className={className}>
            <Spinner type="Oval" width={width} color={COLORS.ALTERNATIVE_FONT} />
            {message && <h5>{message}</h5>}
        </div>
    );
};
 
export default LoadingIndicator;