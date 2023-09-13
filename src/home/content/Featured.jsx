import { Button } from '@mui/material';
import React from 'react';
import FeaturedCard from '../../cards/FeaturedCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import { useGetArticlesQuery } from '../../redux/features/api/baseApi';
const Featured = () => {
    const {data} = useGetArticlesQuery();
    return (
        <>
            <div className='border-b border-[#2CC8B3]'>
                <button className='p-2 bg-[#2CC8B3] text-white font-medium'>Featured Post</button>
            </div>
            <div className='py-4 grid grid-cols-2 gap-6 justify-center items-center'>
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
            </div>
            <div className='flex justify-end gap-2'>
                <NavigateBeforeOutlinedIcon  className='border hover:bg-[#2CC8B3] cursor-pointer' fontSize='large'/>
                <NavigateNextIcon className='border hover:bg-[#2CC8B3] cursor-pointer' fontSize='large'/>
            </div>
        </>
    );
};

export default Featured;