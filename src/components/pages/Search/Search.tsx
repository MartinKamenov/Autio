import React from 'react';
import { Pagination, SearchItemsList } from '../../common';
import './Search.scss';
import { Filters } from '../../common/AdvancedSearch/AdvancedSearch';
import { LoadingIndicator } from '../../base';
import { useEnums } from '../../../services/useEnums';

export type SearchProps = {
    loading: boolean;
    onSubmit: (_: any, newFilters?: Filters) => void;
    pagination: {
        lastPage: number;
        page: string;
    },
    items: any[],
    filters: Filters
};

const Search: React.FC<SearchProps> = ({
    loading,
    onSubmit,
    pagination,
    items,
    filters
}: SearchProps) => {
    const {
        mappers: { brandsMapper }
    } = useEnums();

    return (
        <div className='search-page'>
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
                        page={parseInt(pagination.page, 10)}
                        lastPage={pagination.lastPage}
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
                page={parseInt(pagination.page, 10)}
                lastPage={pagination.lastPage}
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
