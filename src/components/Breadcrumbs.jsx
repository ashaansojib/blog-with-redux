import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
    return (
        <div className='pt-2 flex gap-1 items-center text-slate-400'>
            <FaHome />
            <span className='font-medium hover:underline'><Link to="/">Home</Link></span>
            /
            <span className='hover:underline'><Link to="/">Category by</Link></span>
        </div>
    );
};

export default Breadcrumbs;