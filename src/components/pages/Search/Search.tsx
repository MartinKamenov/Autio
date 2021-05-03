import React, { useEffect, useState } from 'react';
import { AdvancedSearch } from '../../common';
import { RouteComponentProps } from 'react-router';
import './Search.scss';
import { getData, queryToObject, queryToString, QueryObject } from '../../../services/apiService';
import { Filters } from '../../common/AdvancedSearch/AdvancedSearch';
import { arrayResult, singleResult } from '../../../services/typeService';
import { LoadingIndicator } from '../../base';

const queryToFilters = (query: QueryObject): Filters => {
    const result: Filters = {
        brandNames: arrayResult(query.brandNames),
        modelNames: arrayResult(query.modelNames),
        coupeTypes: arrayResult(query.coupeTypes),
        fromYear: singleResult(query.fromYear),
        toYear: singleResult(query.toYear),
        fromPower: singleResult(query.fromPower),
        toPower: singleResult(query.toPower)
    };

    return result;
}

const Search: React.FC<RouteComponentProps> = ({
    history
}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
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
        const filt = queryToFilters(query);
        setFilters(filt);
        
        fetchData(query);
    }, [history.location.search]);

    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }, []);

    const fetchData = async(search: object) => {
        setLoading(true);
        const {data} = await getData('/search/advanced', {...search, pageSize: 24});
        setItems(data.items);
        setLoading(false);
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
            {loading ? (
                <LoadingIndicator style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}/>
            ) : (
                <div className='row clean items-container'>
                {items.map((item: any, i) => (
                    <div key={i}
                        className='col-lg-3 col-md-4 col-sm-6'
                        style={{
                            height: 300,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                        <div style={{
                            height: 250,
                            width: '100%',
                            overflow: 'hidden',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: 10,
                            backgroundImage: `url(${item.imageHref.replace('/thumb', '')})`
                        }}/>
                        <h3>{item.brandShortName} {item.modelName}</h3>
                        <div>{item.name}</div>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
};
 
export default Search;
