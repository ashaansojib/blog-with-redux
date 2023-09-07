import React from 'react';
import Article from '../../cards/Article';

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
            <div className='flex justify-end gap-2'>
            </div>
        </>
    );
};

export default LatestArticles;