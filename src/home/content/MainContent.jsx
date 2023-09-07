import React from 'react';
import Featured from './Featured';
import Tools from './Tools';
import LatestArticles from './LatestArticles';

const MainContent = () => {
    return (
        <main className='col-span-2'>
            {/* featured post area */}
            <Featured />
            {/* Tools sections */}
            <Tools />
            {/* main posts sections */}
            <LatestArticles />
        </main>
    );
};

export default MainContent;