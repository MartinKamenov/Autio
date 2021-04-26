import React from 'react';
import HomeWallpaper from '../../common/HomeWallpaper/HomeWallpaper';
import { AdvancedSearch, SignUpSection } from '../../common';

const Home: React.FC = () => {
    return (
        <>
            <HomeWallpaper/>
            <AdvancedSearch/>
            <SignUpSection/>
        </>
    );
}

export default Home;