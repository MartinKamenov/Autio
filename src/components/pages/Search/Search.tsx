import React, { useEffect, useState } from 'react';
import { AdvancedSearch, Pagination, SearchItemsList } from '../../common';
import { RouteComponentProps } from 'react-router';
import './Search.scss';
import { getData, queryToObject, queryToString, QueryObject } from '../../../services/apiService';
import { Filters } from '../../common/AdvancedSearch/AdvancedSearch';
import { arrayResult, singleResult } from '../../../services/typeService';
import { LoadingIndicator } from '../../base';
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
};

const Search: React.FC<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {
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

    const fetchData = async(search: {
        [key: string]: string | string[] 
    }) => {
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
                            });
                        }}/>
                    <SearchItemsList items={items} brandsMapper={brandsMapper}/>
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
                    });
                }}/>
        </div>
    );
};
 
export default Search;
