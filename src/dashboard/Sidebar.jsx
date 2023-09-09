import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className='flex justify-center items-center flex-col p-4'>
            <div>
                <img className='w-[150px]' src="/mypp.png" alt="" />
            </div>
            <h3 className='font-medium text-xl'>Ashaduzzaman Sojib</h3>
            <p className='text-gray-600'>Web Developer</p>

            <Link to="/dashboard/add-posts">Add Posts</Link>
        </aside>
    );
};

export default Sidebar;