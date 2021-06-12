import React, { useState, useEffect } from 'react';
import './SearchTabs.scss';
import SearchSidebar from '../SearchSidebar';
import Search from '../Search';
import { Filters } from '../../../common/AdvancedSearch/AdvancedSearch';
import { queryToObject, getData, queryToString, QueryObject } from '../../../../services/apiService';
import { RouteComponentProps } from 'react-router';
import { arrayResult, singleResult, getSortingDirection } from '../../../../services/typeService';
import $ from 'jquery';
import { NAVBAR_HEIGHT, DEFAULT_SORTING_VALUE } from '../../../../constants/other';

const queryToFilters = (query: QueryObject): Filters => {
    const result: Filters = {
        brandNames: arrayResult(query.brandNames),
        modelNames: arrayResult(query.modelNames),
        coupeTypes: arrayResult(query.coupeTypes),
        fromYear: singleResult(query.fromYear),
        toYear: singleResult(query.toYear),
        fromPower: singleResult(query.fromPower),
        toPower: singleResult(query.toPower),
        page: singleResult(query.page) || '1',
        sortBy: singleResult(query.sortBy),
        sortDir: getSortingDirection(query.sortDir)
    };

    return result;
};
 
const SearchTabs: React.FC<RouteComponentProps> = ({
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
        page: '1',
        sortBy: DEFAULT_SORTING_VALUE,
        sortDir: 'DESC'
    });

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
        <div className='search-tabs-container'>
            <div className='search-tabs-row'>
                <div className='navigation'>
                    <SearchSidebar
                        filters={filters}
                        setFilters={setFilters}
                        onSubmit={onSubmit}/>
                </div>
                <div className='search-content' style={{
                    height: `calc(100vh - ${NAVBAR_HEIGHT})`,
                    overflowY: 'auto'
                }}>
                    <Search
                        loading={loading}
                        items={items}
                        pagination={{
                            lastPage: lastPage,
                            page: filters.page
                        }}
                        filters={filters}
                        onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
};
 
export default SearchTabs;