import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../dashboard/Header';
import Sidebar from '../dashboard/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className='flex gap-4 dashboard-container mt-6'>
                <div className='w-[350px] border'>
                    <Sidebar />
                </div>
                <div className='border w-full'>
                <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;