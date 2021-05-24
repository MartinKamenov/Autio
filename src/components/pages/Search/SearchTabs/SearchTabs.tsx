import React, { useState } from 'react';
import { NEW_FILTER, EDIT_FILTER } from '../../../../constants/searchTabs';

export interface SearchTabsProps {
    
}
 
const SearchTabs: React.FC<SearchTabsProps> = () => {
    const [tab, setTab] = useState(EDIT_FILTER);
    return (
        <div className='search-tabs-container'>
            <div className='search-tabs-row'>
                <div className='navigation'></div>
                <div className='search-content'></div>
            </div>
        </div>
    );
}
 
export default SearchTabs;