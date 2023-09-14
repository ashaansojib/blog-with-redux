import React, { useState } from 'react';
import FeaturedCard from '../../cards/FeaturedCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import { useGetArticlesQuery } from '../../redux/features/api/baseApi';
import { CircularProgress } from '@mui/material';

const Featured = () => {
    const { data: articles, isLoading } = useGetArticlesQuery();
    const [startIndex, setStartIndex] = useState(0);

    const displayItems = articles?.slice(startIndex, startIndex + 3);

    const handleNextClick = () => {
        if (startIndex + 3 < articles.length) {
            setStartIndex(startIndex + 3);
        }
    };

    const handlePreviousClick = () => {
        if (startIndex - 3 >= 0) {
            setStartIndex(startIndex - 3);
        }
    };
    console.log(displayItems)
    return (
        <>
            <div className='border-b border-[#2CC8B3]'>
                <button className='p-2 bg-[#2CC8B3] text-white font-medium'>Featured Post</button>
            </div>
            <div className='py-4 grid grid-cols-2 gap-6 justify-center items-center'>
                {isLoading ? (
                    <div className='mx-auto p-20'>
                        <CircularProgress />
                    </div>
                ) : (
                    displayItems.map((article) => (
                        <FeaturedCard key={article._id} article={article} />
                    ))
                )}
            </div>
            <div className='flex justify-end gap-2'>
                <NavigateBeforeOutlinedIcon
                    className='border hover:bg-[#2CC8B3] cursor-pointer swiper-button-next'
                    fontSize='large'
                    onClick={handlePreviousClick}
                />
                <NavigateNextIcon
                    className='border hover:bg-[#2CC8B3] cursor-pointer swiper-button-prev'
                    fontSize='large'
                    onClick={handleNextClick}
                />
            </div>
        </>
    );
};

export default Featured;