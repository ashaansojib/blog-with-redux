import { Chip, CircularProgress } from '@mui/material';
import React from 'react';
import { useGetArticlesQuery } from '../redux/features/api/baseApi';

const PostListTable = () => {
    const { data: articles, isLoading } = useGetArticlesQuery();

    const handleDelete = () => {
        console.log("deleted")
    }
    return (
        <div className='py-4'>
            <div className='p-4 grid grid-cols-6 border mb-2'>
                {/* table head */}
                <h4 className='col-span-3'>BASIC INFO</h4>
                <h4 className='text-center'>Date</h4>
                <h4 className='text-center'>Tags</h4>
                <h4 className='text-center'>Actions</h4>
            </div>
            <div>
                {
                    isLoading ? <div className='absolute left-1/2 top-2/3 w-full'><CircularProgress /></div> : articles?.map(item => <div className='p-4 grid grid-cols-6 items-center border rounded-md mb-2' key={item._id}>
                        <div className='col-span-3 flex gap-3'>
                            <div className='w-[90px]'>
                                <img src={item.image} alt="" />
                            </div>
                            <p>{item.title}</p>
                        </div>
                        <div className='text-center text-gray-700'>{item.date}</div>
                        <div className='text-center text-gray-700'>{item.category}</div>
                        <div className='text-center space-x-2'>
                            <Chip label="Delete" onDelete={handleDelete} />
                            <Chip label="Edit" onClick={handleDelete} />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PostListTable;