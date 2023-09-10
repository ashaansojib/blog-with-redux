import React from 'react';
import { FaRegCalendarCheck } from 'react-icons/fa';
import PostListTable from './PostListTable';

const DashboardPage = () => {
    return (
        <>
        <div className='grid grid-cols-3 gap-6'>
            <div className='p-4 bg-[#EDF3FF] flex gap-2 items-center'>
                <FaRegCalendarCheck className='text-3xl text-green-400' />
                <div>
                    <h3 className='text-2xl font-semibold'>23</h3>
                    <p>Total Posts</p>
                </div>
            </div>
            <div className='p-4 bg-[#FFFAE8] flex gap-2 items-center'>
                <FaRegCalendarCheck className='text-3xl text-green-400' />
                <div>
                    <h3 className='text-2xl font-semibold'>23</h3>
                    <p>Total Posts</p>
                </div>
            </div>
            <div className='p-4 bg-[#FFEDF2] flex gap-2 items-center'>
                <FaRegCalendarCheck className='text-3xl text-green-400' />
                <div>
                    <h3 className='text-2xl font-semibold'>23</h3>
                    <p>Total Posts</p>
                </div>
            </div>
        </div>
        <PostListTable />
        </>
    );
};

export default DashboardPage;