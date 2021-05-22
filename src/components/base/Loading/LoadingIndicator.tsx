import React from 'react';
import Spinner from 'react-loader-spinner';
import * as COLORS from '../../../constants/colors';

export interface LoadingIndicatorProps {
    message?: string;
    style?: object;
    className?: string;
}
 
const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
    message,
    className='',
    style={}
}) => {
    return (
        <div style={style} className={className}>
            <Spinner type="Oval" width={50} color={COLORS.ALTERNATIVE_FONT} />
            {message && <h5>{message}</h5>}
        </div>
    );
};
 
export default LoadingIndicator;