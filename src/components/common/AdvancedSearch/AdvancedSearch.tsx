import React, { useEffect, useState } from 'react';
import './AdvancedSearch.scss';
import {
    LoadingIndicator,
    MultipleSelectDropdown
} from '../../base';
import { useEnums } from '../../../services/useEnums';
import { useTranslation, languageKeys } from '../../../services/translations';

export type Filters = {
    brandNames: string[];
    modelNames: string[];
    coupeTypes: string[];
    fromYear: string;
    toYear: string;
    fromPower: string;
    toPower: string;
    page: string;
};

export interface AdvancedSearchProps {
    filters: Filters;
    setFilters: (filters: Filters) => void;
    onSubmit?: (ev: any) => void;
}
 
const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
    filters,
    setFilters,
    onSubmit
}) => {
    const {
        loading,
        enums: options
    } = useEnums();

    const [models, setModels] = useState<any[]>([]);
    const {t} = useTranslation();

    useEffect(() => {
        const filteredModels = options.brands ? options.brands
            .filter((o: any) => !filters.brandNames.length || filters.brandNames
            .includes(o.shortName))
            .map((o: any) => o.models.map((m: any) => ({...m, label: `${o.name} ${m.name}`})))
            .flat() : [];
        
        setModels(filteredModels);
    }, [filters.brandNames, options]);

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
                                    <label>{t(languageKeys.advancedSearch.brand)}</label>
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
                                placeHolder={t(languageKeys.advancedSearch.brandPlaceholder)}
                                onChange={(v) => handleChange('brandNames', v)}
                                containerClassName='dropdown'/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='flex-column rigth'>
                                <div className='label-wrapper'>
                                    <label>{t(languageKeys.advancedSearch.model)}</label>
                                </div>
                                <MultipleSelectDropdown
                                inputStyle={{width: '100%', height: 40}}
                                options={models.map((m: any) => ({
                                    value: m.name,
                                    label: m.label,
                                    imageHref: m.imageHref
                                }))}
                                value={filters.modelNames}
                                placeHolder={t(languageKeys.advancedSearch.modelPlaceholder)}
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
                                    <label>{t(languageKeys.advancedSearch.year)}</label>
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
                                    <span className='separator'>{t(languageKeys.advancedSearch.toLabel)}</span>
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
                                    <label>{t(languageKeys.advancedSearch.coupeTypes)}</label>
                                </div>
                                <MultipleSelectDropdown
                                    options={options.coupeTypes ?
                                        options.coupeTypes.map((o: any) => ({
                                            value: o.name
                                        })) : []}
                                value={filters.coupeTypes}
                                placeHolder={t(languageKeys.advancedSearch.coupeTypesPlaceholder)}
                                inputStyle={{width: '100%', height: 40}}
                                onChange={(v) => handleChange('coupeTypes', v)}
                                containerClassName='dropdown'/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='flex-column rigth'>
                                <div className='label-wrapper'>
                                    <label>{t(languageKeys.advancedSearch.horsePower)}</label>
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
                                    <span className='separator'>{t(languageKeys.advancedSearch.toLabel)}</span>
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
                            {/* <div className='flex-column rigth'>
                                <div className='label-wrapper'>
                                    <label>Coupe Types</label>
                                </div>
                                <Dropdown options={[
                                    'sedan',
                                    'avant',
                                ].map((v) => ({value: v}))} value={'sedan'}
                                onChange={() => {}}
                                className='dropdown'/>
                            </div> */}
                        </div>
                    </div>
                    <button
                        className='search-btn'
                        onClick={onSubmit}>
                        {t(languageKeys.advancedSearch.searchSubmit)}
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default AdvancedSearch;