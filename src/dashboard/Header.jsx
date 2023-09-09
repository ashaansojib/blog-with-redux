import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-4 bg-[#F6F6F6]'>
            <div className="dashboard-container">
                <Link className='text-[#1E88E5] text-sm' to="/">Home</Link>
                <span className='text-slate-600 text-sm'> / dashboard</span>
                <h4 className='text-2xl font-medium'>Dashboard</h4>
            </div>
        </div>
    );
};

export default Header;