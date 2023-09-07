import { Button, Chip } from '@mui/material';
import React from 'react';

const HeroSection = () => {

    return (
        <div className='py-4 my-container grid grid-cols-2 gap-4 lg:h-[450px]'>
            <div className='img-parent'>
                <img className='image-control' src="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg" alt="" />
                <div className='img-content'>
                    <button className='article-tag'>iPhone</button>
                    <h2 className='text-3xl font-semibold'>What is Roting & How does it works?</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, cumque repellat. Provident molestias corporis dolores.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='img-parent'>
                    <img className='image-control' src="https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-icloud-activation-lock-screen-on-ios-16-01.jpg" alt="" />
                    <div className='img-content bg-slate-400 bg-opacity-80 font-medium text-[18px]'>
                        <h2>How to unlock Icloud?</h2>
                        <button className='article-tag'>iPhone</button>
                    </div>
                </div>
                <div className='img-parent'>
                    <img className='image-control' src="https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-icloud-activation-lock-screen-on-ios-16-01.jpg" alt="" />
                    <div className='img-content bg-slate-400 bg-opacity-80 font-medium text-[18px]'>
                        <h2>How to unlock Icloud?</h2>
                        <button className='article-tag'>iPhone</button>
                    </div>
                </div>
                <div className='img-parent'>
                    <img className='image-control' src="https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-icloud-activation-lock-screen-on-ios-16-01.jpg" alt="" />
                    <div className='img-content bg-black bg-opacity-60 font-medium text-[18px]'>
                    <button className='article-tag'>iPhone</button>
                        <h2>How to unlock Icloud?</h2>
                    </div>
                </div>
                <div className='img-parent'>
                    <img className='image-control' src="https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-icloud-activation-lock-screen-on-ios-16-01.jpg" alt="" />
                    <div className='img-content bg-black bg-opacity-60 font-medium text-[18px]'>
                    <button className='article-tag'>iPhone</button>
                        <h2>KTM Marchetti Signs with Larranaga and Zanotti</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;