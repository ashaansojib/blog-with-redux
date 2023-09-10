import { Rating } from '@mui/material';
import React from 'react';
import SidebarList from './SidebarList';

const Sidebar = () => {
    const [value, setValue] = React.useState(4);
    return (
        <aside className=''>
            <div className='flex justify-center items-center flex-col p-4'>
                <div className='mb-2'>
                    <img className='w-[150px]' src="/mypp.png" alt="" />
                </div>
                <Rating name="read-only" value={value} readOnly />
                <h3 className='font-medium text-xl'>Ashaduzzaman Sojib</h3>
                <p className='text-gray-600 border-b-8 rounded-md border-[#2CC8B3] w-full text-center'>Web Developer</p>
            </div>
            {/* sidebar lists */}
            <SidebarList />
        </aside>
    );
};

export default Sidebar;