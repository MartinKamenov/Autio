import React from 'react';
import './Brand.scss';
 
const Brand: React.FC = () => {
    const brand = {
        name: 'Audi',
        icon: 'https://img.icons8.com/ios/452/audi.png',
        color: 'black',
        backgroundColor: 'white',
    };
    return (
        <div className='brand-page-container'>
            <div className='brand-nav' style={{backgroundColor: brand.backgroundColor, color: brand.color}}>
                <img src={brand.icon} alt={brand.name}/>
                <h1>{brand.name}</h1>
            </div>
        </div>
    );
};
 
export default Brand;