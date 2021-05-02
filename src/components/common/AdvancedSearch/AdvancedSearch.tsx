import React, { useEffect, useState } from 'react';
import './AdvancedSearch.scss';
import {
    Dropdown,
    LoadingIndicator,
    MultipleSelectDropdown
} from '../../base';
import { getData } from '../../../services/apiService';

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
    const [models, setModels] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const filteredModels = options.brands ? options.brands
            .filter((o: any) => !filters.brandNames.length || filters.brandNames
            .includes(o.shortName))
            .map((o: any) => o.models.map((m: any) => ({...m, label: `${o.name} ${m.name}`})))
            .flat() : [];
        
        setModels(filteredModels);
    }, [filters.brandNames, options.brands]);

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
                                <MultipleSelectDropdown
                                inputStyle={{width: '100%', height: 40}}
                                options={options.brands ?
                                    options.brands.map((o: any) => ({
                                        label: o.name,
                                        value: o.shortName,
                                        imageHref: o.imageHref
                                    })) : []}
                                value={filters.brandNames}
                                onChange={(v) => handleChange('brandNames', v)}
                                containerClassName='dropdown'/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='flex-column rigth'>
                                <div className='label-wrapper'>
                                    <label>Model</label>
                                </div>
                                <MultipleSelectDropdown
                                inputStyle={{width: '100%', height: 40}}
                                options={models.map((m: any) => ({
                                    value: m.name,
                                    label: m.label,
                                    imageHref: m.imageHref
                                }))}
                                value={filters.modelNames}
                                onChange={(v) => handleChange('modelNames', v)}
                                containerClassName='dropdown'/>
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
                                        type='number'
                                        value={filters.fromYear}
                                        onChange={({
                                            target: {
                                                value
                                            }
                                        }) => handleChange('fromYear', value)}/>
                                    <span className='separator'>to</span>
                                    <input
                                        type='number'
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
                                <MultipleSelectDropdown options={[
                                    {value: 'Audi'},
                                    {value: 'BMW'},
                                    {value: 'Mercedes'}
                                ]} value={['Audi']}
                                inputStyle={{width: '100%', height: 40}}
                                onChange={() => {}}
                                containerClassName='dropdown'/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='flex-column rigth'>
                                <div className='label-wrapper'>
                                    <label>Horse power</label>
                                </div>
                                <div className='from-to-container'>
                                    <input
                                        type='number'
                                        value={filters.fromPower}
                                        onChange={({
                                            target: {
                                                value
                                            }
                                        }) => handleChange('fromPower', value)}/>
                                    <span className='separator'>to</span>
                                    <input
                                        type='number'
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