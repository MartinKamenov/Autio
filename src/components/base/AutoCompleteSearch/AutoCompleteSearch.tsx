import React, { useState, useEffect, useRef } from 'react';
import './AutoCompleteSearch.scss';
import { Icon, LoadingIndicator } from '..';
import { getData } from '../../../services/apiService';
import { CarEntry } from '../../../types';
import { Link } from 'react-router-dom';

// This component should be connected to backend endpoints,
// and the onChange event's handler should be debounced
const DEBOUNCE_TIMER: number = 500;
let timeout: NodeJS.Timeout | null = null;
let lastQueryValue: string | null = null;

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
    const [focused, setFocused] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const fetchCarsData = async (text: string): Promise<CarEntry[]> => {
        const { data: cars } = await getData(apiWrapperUrl, { query: text });
        return cars;
    };

    useEffect(() => {
        if (timeout) {
            clearTimeout(timeout);
        }

        if(!focused) {
            return;
        }

        timeout = setTimeout(async() => {
            //make api call
            if(lastQueryValue !== null && lastQueryValue === value) {
                return;
            }
            setLoadingResults(true);
            lastQueryValue = value;
            const updatedCars = await fetchCarsData(value);
            setFetched(true);
            setLoadingResults(false);
            setCarEntries(updatedCars);
        }, DEBOUNCE_TIMER);
    }, [value, focused]);

    useEffect(() => {
        if(focused) {
            document.body
                .addEventListener('click', closeWhenClickedOutside);
        } else {
            document.body
                .removeEventListener('click', closeWhenClickedOutside);
        }
        return () => {
            document.body
                .removeEventListener('click', closeWhenClickedOutside);
        }
    }, [focused]);

    const closeWhenClickedOutside = (ev: any) => {
        const target = ev.target;

        if(ref.current !== null && ref.current !== target && !ref.current.contains(target)) {
            setFocused(false);
        }
    }

    return (
        <div className={className}
            onFocus={() => setFocused(true)}
            ref={ref}>
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
            {focused && (fetched || loadingResults) && <div className='dropdown-results'>
                {loadingResults ? <LoadingIndicator/> : (
                    <ul>
                        {carEntries.length === 0 && (
                            <li className='no-result'>No results found</li>
                        )}
                        {
                            carEntries.map(entry => (
                                <Link
                                    className='result-link'
                                    to={entry.shortName ? `/search?brandNames[]=${entry.shortName}` : 

                                    // This link should link directly to the details of the
                                    // car modification
                                    `/search?brandNames[]=${entry.brandShortName || ''}`}>
                                    <li key={entry._id} className={'result'}>
                                        <div className='dropdown-image-container'>
                                            <img src={entry.imageHref}></img>
                                        </div>
                                        <div className='name'>{entry.name}</div>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                )}
            </div>}
        </div>
    );
}

export default AutoCompleteSearch;