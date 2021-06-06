import React from 'react';
import './SearchSidebar.scss';
import VisibleDropdown from '../../../base/VisibleDropdown';
import { useEnums } from '../../../../services/useEnums';
import { Filters } from '../../../common/AdvancedSearch/AdvancedSearch';
import { MainButton } from '../../../base/BaseUI/BaseUI';
import { useTranslation, languageKeys } from '../../../../services/translations';
import { NAVBAR_HEIGHT } from '../../../../constants/other';

export interface SearchSidebarProps {
    filters: Filters,
    setFilters: (filters: Filters) => void,
    onSubmit: (_: any, newFilters?: Filters) => void
}
 
const SearchSidebar: React.FC<SearchSidebarProps> = ({
    filters,
    setFilters,
    onSubmit
}: SearchSidebarProps) => {
    const {
        enums: {
            brands: brandOptions,
            coupeTypes: coupeTypeOptions
        },
        mappers: {
            brandsMapper
        }
    } = useEnums();
    const {t} = useTranslation();

    return (
        <div className='search-sidebar' style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT})`
        }}>
            <div className='search-sidebar-content'><div className='header'>
                <h5>{t(languageKeys.advancedSearch.brand)}</h5>
            </div>
            <VisibleDropdown options={brandOptions.map((b) => ({
                value: b.shortName,
                label: brandsMapper[b.shortName]
            }))} onChange={(brandNames) => setFilters({...filters, brandNames})}
            className='custom-dropdown-filter'
            value={filters.brandNames}/>
            <div className='header'>
                <h5>{t(languageKeys.advancedSearch.coupeTypes)}</h5>
            </div>
            <VisibleDropdown options={coupeTypeOptions.map((b) => ({
                value: b.name
            }))} onChange={(coupeTypes) => setFilters({...filters, coupeTypes})}
            className='custom-dropdown-filter'
            value={filters.brandNames}/>
            </div>
            <div className='search-sidebar-action-bar'>
                <MainButton onClick={onSubmit} className='action-button'>
                    {t(languageKeys.search.submitSearch)}
                </MainButton>
            </div>
        </div>
    );
};
 
export default SearchSidebar;