import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../shared/Navigation';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;