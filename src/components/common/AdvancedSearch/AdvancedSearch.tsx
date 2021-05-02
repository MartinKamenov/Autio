import React, { useEffect, useCallback, useState } from 'react';
import './AdvancedSearch.scss';
import { Dropdown } from '../../base';
import { getData } from '../../../services/apiService';
import { async } from 'q';

export interface AdvancedSearchProps {
    
}
 
const AdvancedSearch: React.FC<AdvancedSearchProps> = ({

}) => {
    const [options, setOptions] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const {data} = await getData('/enums');
        const reducedData = data
        .reduce((
            acc: object,
            cur: {id: string, values: any[]}
        ) => ({...acc, [cur.id]: cur.values}), {});
        setOptions(reducedData);
    };

    return (
        <div className='advanced-search-wrapper'>
            <div className='container'>
                <div className='inner-container'>
                    <div className='row clean'>
                        <div className='col-md-6'>
                            <div className='flex-column left'>
                                <div className='label-wrapper'>
                                    <label>Brand</label>
                                </div>
                                <Dropdown options={[
                                    'Audi',
                                    'BMW',
                                    'Mercedes'
                                ]} value='Audi'
                                onChange={() => {}}
                                className='dropdown'/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='flex-column rigth'>
                                <div className='label-wrapper'>
                                    <label>Model</label>
                                </div>
                                <Dropdown options={[
                                    'A3',
                                    'A3',
                                    'A5'
                                ]} value='A3'
                                onChange={() => {}}
                                className='dropdown'/>
                            </div>
                        </div>
                    </div>
                    <div style={{marginLeft: 40, width: 'calc(100% - 80px)', height: 1, backgroundColor: '#aaaaaa'}}/>
                    <div className='row clean'>
                        <div className='col-md-6'>
                            <div className='flex-column left'>
                                <div className='label-wrapper'>
                                    <label>Year</label>
                                </div>
                                <div className='from-to-container'>
                                    <input/>
                                    <span className='separator'>to</span>
                                    <input/>
                                </div>
                            </div>
                            <div className='flex-column left'>
                                <div className='label-wrapper'>
                                    <label>Engine type</label>
                                </div>
                                <Dropdown options={[
                                    'Audi',
                                    'BMW',
                                    'Mercedes'
                                ]} value='Audi'
                                onChange={() => {}}
                                className='dropdown'/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='flex-column rigth'>
                                <div className='label-wrapper'>
                                    <label>Horse power</label>
                                </div>
                                <div className='from-to-container'>
                                    <input/>
                                    <span className='separator'>to</span>
                                    <input/>
                                </div>
                            </div>
                            <div className='flex-column rigth'>
                                <div className='label-wrapper'>
                                    <label>Transmission</label>
                                </div>
                                <Dropdown options={[
                                    'A3',
                                    'A3',
                                    'A5'
                                ]} value='A3'
                                onChange={() => {}}
                                className='dropdown'/>
                            </div>
                        </div>
                    </div>
                    <button className='search-btn'>SEARCH</button>
                </div>
            </div>
        </div>
    );
}
 
export default AdvancedSearch;