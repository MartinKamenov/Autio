import React from 'react';
import './SearchSidebar.scss';
import VisibleDropdown from '../../../base/VisibleDropdown';
import { useEnums } from '../../../../services/useEnums';
import { Filters } from '../../../common/AdvancedSearch/AdvancedSearch';
import { MainButton } from '../../../base/BaseUI/BaseUI';
import { useTranslation, languageKeys } from '../../../../services/translations';
import { NAVBAR_HEIGHT, getSortingValues } from '../../../../constants/other';
import { Dropdown } from '../../../base';
import { cloneDeep } from 'lodash';

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
    const { t } = useTranslation();

    const getModels = (): { label: string, value: string, groupKey: string }[] => {
        let modelOptions: { label: string, value: string, groupKey: string }[] = [];
        if (filters && filters.brandNames && filters.brandNames.length > 0) {
            filters.brandNames.forEach(brandName => {
                const selectedBrand = brandOptions.find(option => option.shortName === brandName);
                if (selectedBrand) {                
                    const brandModels = cloneDeep(selectedBrand?.models);
                    const brandFullName = selectedBrand.name;
                    if (brandModels) {
                        const options = brandModels.map((model) => {
                            return {
                                label: model.name,
                                value: model.name,
                                groupKey: brandFullName
                            };
                        });
                        modelOptions = modelOptions.concat(options);
                    }
                }
            });
        }
        return modelOptions;
    };

    return (
        <div className='search-sidebar' style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT})`
        }}>
            <div className='search-sidebar-content'>
                <div className='header'>
                    <h5>{t(languageKeys.search.sortBy)}</h5>
                </div>
                <Dropdown options={getSortingValues(t)}
                    value={filters.sortBy}
                    onChange={(sortBy) => setFilters({ ...filters, sortBy })}
                    style={{ width: '100%' }} />
                <div className='header'>
                    <h5>{t(languageKeys.advancedSearch.brand)}</h5>
                </div>
                <VisibleDropdown options={brandOptions.map((b) => ({
                    value: b.shortName,
                    label: brandsMapper[b.shortName]
                }))} onChange={(brandNames) => setFilters({ ...filters, brandNames })}
                className='custom-dropdown-filter'
                value={filters.brandNames} />
                <div className='header'>
                    <h5>{t(languageKeys.advancedSearch.model)}</h5>
                </div>
                <VisibleDropdown options={getModels()} onChange={(modelNames) => setFilters({ ...filters, modelNames })}
                    className='custom-dropdown-filter'
                    value={filters.modelNames} />
                <div className='header'>
                    <h5>{t(languageKeys.advancedSearch.coupeTypes)}</h5>
                </div>
                <VisibleDropdown options={coupeTypeOptions.map((b) => ({
                    value: b.name
                }))} onChange={(coupeTypes) => setFilters({ ...filters, coupeTypes })}
                className='custom-dropdown-filter'
                value={filters.coupeTypes} />
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