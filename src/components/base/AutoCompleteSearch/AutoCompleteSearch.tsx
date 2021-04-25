import React, { useState, useEffect } from 'react';
import './AutoCompleteSearch.scss';
import { Icon } from '..';
import { getData } from '../../../services/apiService';
import { CarEntry } from '../../../types';

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
    placeholder = '',
    className = '',
    style = {}
}) => {
    const [value, setValue] = useState('');
    const [carEntries, setCarEntries] = useState<CarEntry[]>([]);

    const fetchCarsData = async (text: string): Promise<CarEntry[]> => {
        const { data: cars } = await getData('/search', { query: text });
        return cars;
    };

    useEffect(() => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout( async () => {
            //make api call
            const updatedCars = await fetchCarsData(value);
            setCarEntries(updatedCars);
        }, DEBOUNCE_TIMER);
    }, [value]);

    return (
        <div className={className}>
            <div className='auto-complete-prefix'>
                <Icon icon='search' style={{
                    fontSize: 30,
                    color: 'gray',
                }} />
            </div>
            <input
                value={value}
                onChange={({ target: { value } }) => setValue(value)}
                placeholder={placeholder}
                style={style}
                className={`auto-complete-input`} />
            <div className={'dropdown-results'}>
                <ul>{
                    carEntries.map(entry => (
                        <li key={entry._id} className={'result'}>
                            <img src={entry.imageHref}></img>
                            <div>{entry.name}</div>
                        </li>
                    ))
                }</ul>
            </div>
        </div>
    );
}

export default AutoCompleteSearch;