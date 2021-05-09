import React, { useEffect, useState } from 'react';
import { AdvancedSearch, Pagination } from '../../common';
import { RouteComponentProps } from 'react-router';
import './Search.scss';
import { getData, queryToObject, queryToString, QueryObject } from '../../../services/apiService';
import { Filters } from '../../common/AdvancedSearch/AdvancedSearch';
import { arrayResult, singleResult } from '../../../services/typeService';
import { LoadingIndicator, Card } from '../../base';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useEnums } from '../../../services/useEnums';

const queryToFilters = (query: QueryObject): Filters => {
    const result: Filters = {
        brandNames: arrayResult(query.brandNames),
        modelNames: arrayResult(query.modelNames),
        coupeTypes: arrayResult(query.coupeTypes),
        fromYear: singleResult(query.fromYear),
        toYear: singleResult(query.toYear),
        fromPower: singleResult(query.fromPower),
        toPower: singleResult(query.toPower),
        page: singleResult(query.page) || '1'
    };

    return result;
}

const Search: React.FC<RouteComponentProps> = ({
    history
}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastPage, setLastPage] = useState(1);
    const [filters, setFilters] = useState<Filters>({
        brandNames: [],
        modelNames: [],
        coupeTypes: [],
        fromYear: '',
        toYear: '',
        fromPower: '',
        toPower: '',
        page: '1'
    });

    const {
        mappers: { brandsMapper }
    } = useEnums();

    useEffect(() => {
        const search = history.location.search;
        const query = queryToObject(search);
        const filt = queryToFilters(query);
        setFilters(filt);
        
        fetchData(query);
    }, [history.location.search]);

    useEffect(() => {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    }, [history.location.search]);

    const fetchData = async(search: object) => {
        setLoading(true);
        const {data} = await getData('/search/advanced', {...search, pageSize: 24});
        setItems(data.items);
        setLastPage(data.totalPagesCount);
        setLoading(false);
    };

    const onSubmit = (_: any, newFilters?: Filters) => {
        const updateFilters = newFilters ? newFilters : {...filters, page: '1'};
        history.push(`/search${queryToString(updateFilters)}`);
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
                <>
                    <Pagination
                        style={{
                            marginTop: 20
                        }}
                        page={parseInt(filters.page, 10)}
                        lastPage={lastPage}
                        onChange={(newPage) => {
                            onSubmit(null, {
                                ...filters,
                                page: newPage.toString()
                            })
                        }}/>
                    <div className='row clean items-container'>
                    {items.map((item: any, i) => (
                        <div key={i}
                            className='col-lg-3 col-md-4 col-sm-6 column-element'>
                            <Link className='details-container' to={`/modifications/${item.id}`}>
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
                </>
            )}
            <Pagination
                style={{
                    marginBottom: 20
                }}
                page={parseInt(filters.page, 10)}
                lastPage={lastPage}
                onChange={(newPage) => {
                    onSubmit(null, {
                        ...filters,
                        page: newPage.toString()
                    })
                }}/>
        </div>
    );
};
 
export default Search;
