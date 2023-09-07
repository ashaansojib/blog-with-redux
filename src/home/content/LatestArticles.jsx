import React from 'react';
import Article from '../../cards/Article';
import { Pagination } from '@mui/material';

const LatestArticles = () => {
    return (
        <>
            <div className='border-b border-[#2CC8B3]'>
                <button className='p-2 bg-[#2CC8B3] text-white font-medium'>Latest Posts</button>
            </div>
            <div className=''>
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
            <div className='py-2 flex justify-center'>
                <Pagination count={10} variant="outlined" color="primary" />
            </div>
        </>
    );
};

export default LatestArticles;