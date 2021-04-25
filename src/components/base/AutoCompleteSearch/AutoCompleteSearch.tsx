import React, { useState, useEffect } from 'react';
import './AutoCompleteSearch.scss';
import { Icon, LoadingIndicator } from '..';
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
    const [loadingResults, setLoadingResults] = useState(false);
    const [fetched, setFetched] = useState(false);

    const fetchCarsData = async (text: string): Promise<CarEntry[]> => {
        const { data: cars } = await getData(apiWrapperUrl, { query: text });
        return cars;
    };

    useEffect(() => {
        if (timeout) {
            clearTimeout(timeout);
        }

        if(!value) {
            return;
        }

        timeout = setTimeout(async() => {
            //make api call
            setLoadingResults(true);
            const updatedCars = await fetchCarsData(value);
            setFetched(true);
            setLoadingResults(false);
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
                className='auto-complete-input' />
            {(fetched || loadingResults) && <div className='dropdown-results'>
                {loadingResults ? <LoadingIndicator/> : (
                    <ul>
                        {carEntries.length === 0 && (
                            <li className='no-result'>No results found</li>
                        )}
                        {
                            carEntries.map(entry => (
                                <li key={entry._id} className={'result'}>
                                    <div className='dropdown-image-container'>
                                        <img src={entry.imageHref}></img>
                                    </div>
                                    <div>{entry.name}</div>
                                </li>
                            ))
                        }
                    </ul>
                )}
            </div>}
        </div>
    );
}

export default AutoCompleteSearch;