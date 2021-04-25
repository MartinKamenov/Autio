import React, { useState, useEffect } from 'react';
import './AutoCompleteSearch.scss';
import { Icon } from '..';

// This component should be connected to backend endpoints,
// and the onChange event's handler should be debounced
const DEBOUNCE_TIMER: number = 500;
let timeout: NodeJS.Timeout | null = null;

export interface autoCompleteSearchProps {
    apiWrapperUrl: string;
    placeholder?: string;
    className?: string;
    style?: object;
}

const AutoCompleteSearch: React.FC<autoCompleteSearchProps> = ({
    apiWrapperUrl,
    placeholder='',
    className='',
    style={}
}) => {
    const [value, setValue] = useState('');

    const fetchCarsData = (text: string) => {
    };

    useEffect(() => {
        if(timeout) {
            clearTimeout(timeout);
        }
        
        timeout = setTimeout(() => {
            //make api call
            fetchCarsData(value);
        }, DEBOUNCE_TIMER);
    }, [value]);

    return (
        <div className={className}>
            <div className='auto-complete-prefix'>
                <Icon icon='search' style={{
                    fontSize: 30,
                    color: 'gray',
                }}/>
            </div>
            <input
                value={value}
                onChange={({ target: { value } }) => setValue(value)}
                placeholder={placeholder}
                style={style}
                className={`auto-complete-input`}/>
        </div>
    );
}
 
export default AutoCompleteSearch;