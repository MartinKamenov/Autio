import React, { useEffect, useCallback, useState } from 'react';
import './AdvancedSearch.scss';
import { Dropdown, LoadingIndicator } from '../../base';
import { getData } from '../../../services/apiService';
import { async } from 'q';

export type Filters = {
    brandNames: string[];
    modelNames: string[];
    coupeTypes: string[];
    fromYear: string;
    toYear: string;
    fromPower: string;
    toPower: string;
};

export interface AdvancedSearchProps {
    filters: Filters;
    setFilters: Function;
    onSubmit?: (ev: any) => void;
}
 
const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
    filters,
    setFilters,
    onSubmit
}) => {
    const [options, setOptions] = useState<any>({});
    const [loading, setLoading] = useState(true);

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
        setLoading(false);
    };

    const handleChange = (key: string, value: string | string[]) => {
        setFilters({...filters, [key]: value});
    }

    if(loading) {
        return <LoadingIndicator style={{display: 'flex', justifyContent: 'center'}}/>;
    }

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
                                <Dropdown
                                multiple
                                options={[]}
                                value={filters.brandNames}
                                onChange={(v) => handleChange('brandNames', v)}
                                className='dropdown'/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='flex-column rigth'>
                                <div className='label-wrapper'>
                                    <label>Model</label>
                                </div>
                                <Dropdown
                                multiple
                                options={[]}
                                value={filters.modelNames}
                                onChange={(v) => handleChange('modelNames', v)}
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
                                    <input
                                        value={filters.fromYear}
                                        onChange={({
                                            target: {
                                                value
                                            }
                                        }) => handleChange('fromYear', value)}/>
                                    <span className='separator'>to</span>
                                    <input
                                        value={filters.toYear}
                                        onChange={({
                                            target: {
                                                value
                                            }
                                        }) => handleChange('toYear', value)}/>
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
                                    <input
                                        value={filters.fromPower}
                                        onChange={({
                                            target: {
                                                value
                                            }
                                        }) => handleChange('fromPower', value)}/>
                                    <span className='separator'>to</span>
                                    <input
                                        value={filters.toPower}
                                        onChange={({
                                            target: {
                                                value
                                            }
                                        }) => handleChange('toPower', value)}/>
                                </div>
                            </div>
                            <div className='flex-column rigth'>
                                <div className='label-wrapper'>
                                    <label>Coupe Types</label>
                                </div>
                                <Dropdown options={[
                                    'sedan',
                                    'avant',
                                ]} value={['sedan']}
                                onChange={() => {}}
                                multiple
                                className='dropdown'/>
                            </div>
                        </div>
                    </div>
                    <button
                        className='search-btn'
                        onClick={onSubmit}>
                        SEARCH
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default AdvancedSearch;