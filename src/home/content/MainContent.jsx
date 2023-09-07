import React from 'react';
import Featured from './Featured';
import Tools from './Tools';

const MainContent = () => {
    return (
        <main className='col-span-2'>
            {/* featured post area */}
            <Featured />
            {/* Tools sections */}
            <Tools />
        </main>
    );
};

export default MainContent;