import React from 'react';
import { Link } from 'react-router-dom';

const Article = () => {
    return (
        <article className='grid grid-cols-3 gap-3 justify-between py-4 border-b border-slate-200 article-parent'>
            <div className='img-parent relative'>
                <img className='image-control' src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/95-696x464.jpg" alt="" />
                <button className='p-1 text-sm absolute top-2 left-2 bg-[#2CC8B3] text-white'>Category</button>
            </div>
            <div className='col-span-2'>
                <Link><h2 className='text-2xl font-bold '>Are you Ready? Complete Recap of the Streer Rally Action Shootout !</h2></Link>
                <p className='font-medium'>Sojib - <small>August 10, 2023</small></p>
                <p className='text-[14px] text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam animi dolor ex mollitia nam veritatis nisi delectus voluptate facere corporis et, aspernatur quis quibusdam amet... <Link className='font-medium hover:text-green-500' to="/">Read More</Link></p>
            </div>
        </article>
    );
};

export default Article;