import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../base';

export interface SearchItemsListProps {
    items: any[],
    brandsMapper: {[key: string]: string}
}
 
const SearchItemsList: React.FC<SearchItemsListProps> = ({
    items,
    brandsMapper
}: SearchItemsListProps) => (
    <div className='row clean items-container'>
        {items.map((item: any, i) => (
            <div key={i}
                className='col-lg-3 col-md-4 col-sm-6 column-element'>
                <Link className='details-container' to={{
                    pathname: `/modifications/${item.id}`,
                    state: {
                        prevPath: `${location.pathname}${location.search}`
                    }}}>
                    <Card imageHref={item.imageHref.replace('/thumb', '')}
                        content={() => (
                            <div className='description-wrapper'>
                                <h5 className='title'>
                                    {brandsMapper[item.brandShortName]} {item.modelName} {item.name}
                                </h5>
                            </div>
                        )}
                        style={{
                            margin: '10px auto'
                        }}/>
                </Link>
            </div>
        ))}
    </div>
);
 
export default SearchItemsList;