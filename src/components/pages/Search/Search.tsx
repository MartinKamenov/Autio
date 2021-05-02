import React, { useEffect, useState } from 'react';
import { AdvancedSearch } from '../../common';
import { RouteComponentProps } from 'react-router';
import './Search.scss';
import { getData, queryToObject, queryToString } from '../../../services/apiService';
import { Filters } from '../../common/AdvancedSearch/AdvancedSearch';
 
const Search: React.FC<RouteComponentProps> = ({
    history
}) => {
    const [items, setItems] = useState([]);
    const [filters, setFilters] = useState<Filters>({
        brandNames: [],
        modelNames: [],
        coupeTypes: [],
        fromYear: '',
        toYear: '',
        fromPower: '',
        toPower: ''
    });

    useEffect(() => {
        const search = history.location.search;
        const query = queryToObject(search);
        
        fetchData(query);
    }, [history.location.search]);

    const fetchData = async(search: object) => {
        const {data} = await getData('/search/advanced', search);
        setItems(data.items);
    };

    const onSubmit = () => {
        history.push(`/search${queryToString(filters)}`);
    };

    return (
        <div className='search-page'>
            <AdvancedSearch
                filters={filters}
                setFilters={setFilters}
                onSubmit={onSubmit}/>
            <div className='row clean'>
                {items.map((item: any, i) => (
                    <div key={i}
                        className='col-md-3'
                        style={{
                            height: 300,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                        <img src={item.imageHref.replace('/thumb', '')}
                            style={{
                                height: 200,
                                borderRadius: 10
                            }}/>
                        <h3>{item.brandShortName} {item.modelName}</h3>
                        <div>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
 
export default Search;
