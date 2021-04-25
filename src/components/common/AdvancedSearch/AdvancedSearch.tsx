import React from 'react';
import './AdvancedSearch.scss';
import { Dropdown } from '../../base';

export interface AdvancedSearchProps {
    
}
 
const AdvancedSearch: React.FC<AdvancedSearchProps> = () => {
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
                    <div className='row clean'>
                        <div className='col-md-6'>
                            <div className='flex-column left'>
                                <div className='label-wrapper'>
                                    <label>Year</label>
                                </div>
                                <Dropdown options={[
                                    'Audi',
                                    'BMW',
                                    'Mercedes'
                                ]} value='Audi'
                                onChange={() => {}}
                                className='dropdown'/>
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
                                <Dropdown options={[
                                    'A3',
                                    'A3',
                                    'A5'
                                ]} value='A3'
                                onChange={() => {}}
                                className='dropdown'/>
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
                </div>
            </div>
        </div>
    );
}
 
export default AdvancedSearch;