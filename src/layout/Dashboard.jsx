import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../dashboard/Header';
import Sidebar from '../dashboard/Sidebar';
import Footer from '../dashboard/Footer';
import DashboardPage from '../dashboard/DashboardPage';

const Dashboard = () => {
    const location = useLocation();
    // console.log(location)
    return (
        <div>
            <Header />
            <div className='flex gap-4 dashboard-container mt-6'>
                <div className='w-[350px] border'>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    {
                        location.pathname  === '/dashboard' ? <DashboardPage /> : <Outlet />
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;