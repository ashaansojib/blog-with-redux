import React from 'react';
import Social from './Social';
import MostPopular from './MostPopular';
import SidebarAds from './SidebarAds';
import Comments from './Comments';

const Aside = () => {
    return (
        <aside className='ml-4'>
            <Social />
            <SidebarAds />
            <MostPopular />
            <Comments />
        </aside>
    );
};

export default Aside;