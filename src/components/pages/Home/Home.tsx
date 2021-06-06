import React, { useState } from 'react';
import HomeWallpaper from '../../common/HomeWallpaper/HomeWallpaper';
import { AdvancedSearch, SignUpSection } from '../../common';
import { Filters } from '../../common/AdvancedSearch/AdvancedSearch';
import { RouteComponentProps } from 'react-router';
import { queryToString } from '../../../services/apiService';
import { InformationSection } from '../../common/InformationSection/InformationSection';
import { DEFAULT_SORTING_VALUE } from '../../../constants/other';

const Home: React.FC<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {
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

    const onSubmit = () => {
        history.push(`/search${queryToString(filters)}`);
    };

    return (
        <div className="home-container">
            <HomeWallpaper/>
            <AdvancedSearch
                filters={filters}
                setFilters={setFilters}
                onSubmit={onSubmit}/>
            <SignUpSection/>
            <InformationSection />
        </div>
    );
};

export default Home;