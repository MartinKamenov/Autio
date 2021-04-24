import React, { useState } from 'react';
import './AutoCompleteSearch.scss';
import { Icon } from '..';

// This component should be connected to backend endpoints,
// and the onChange event's handler should be debounced

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