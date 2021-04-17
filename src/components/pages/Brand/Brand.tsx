import React from 'react';
import './Brand.scss';

export interface BrandProps {
    
}
 
const Brand: React.FC<BrandProps> = () => {
    const brand = {
        name: 'Audi',
        icon: 'https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854',
        color: 'black',
        backgroundColor: 'white',
    }
    return (
        <div className='brand-page-container'>
            <div className='brand-nav' style={{backgroundColor: brand.backgroundColor, color: brand.color}}>
                <img src={brand.icon} alt={brand.name}/>
                <h1>{brand.name}</h1>
            </div>
        </div>
    );
}
 
export default Brand;