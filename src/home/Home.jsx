import React from 'react';
import HeroSection from './hero/HeroSection';
import MainContent from './content/MainContent';
import Aside from './aside/Aside';

const Home = () => {
    return (
        <div>
            {/* Homepage Bannger */}
            <HeroSection />
            {/* Main content outer */}
            <div className='my-container grid grid-cols-3 gap-4 my-10'>
                <MainContent />
                <Aside />
            </div>
        </div>
    );
};

export default Home;