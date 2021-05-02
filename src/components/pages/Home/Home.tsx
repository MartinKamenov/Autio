import React, { useState } from 'react';
import HomeWallpaper from '../../common/HomeWallpaper/HomeWallpaper';
import { AdvancedSearch, SignUpSection } from '../../common';
import { Filters } from '../../common/AdvancedSearch/AdvancedSearch';
import { RouteComponentProps } from 'react-router';
import { queryToString } from '../../../services/apiService';

const Home: React.FC<RouteComponentProps> = ({
    history
}) => {
    const [filters, setFilters] = useState<Filters>({
        brandNames: [],
        modelNames: [],
        coupeTypes: [],
        fromYear: '',
        toYear: '',
        fromPower: '',
        toPower: ''
    });

    const onSubmit = () => {
        history.push(`/search${queryToString(filters)}`);
    }

    return (
        <>
            <HomeWallpaper/>
            <AdvancedSearch
                filters={filters}
                setFilters={setFilters}
                onSubmit={onSubmit}/>
            <SignUpSection/>
        </>
    );
}

export default Home;