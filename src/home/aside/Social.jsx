import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Social = () => {
    return (
        <div className='pb-2'>
            <div className='border-b'>
                <button className='p-2 bg-slate-800 text-white font-medium'>Stay Connected</button>
            </div>
            <div className='pt-4 pb-2 flex items-center justify-between gap-2'>
                <div className='flex gap-2 items-center'>
                    <FaFacebookF className='p-1 text-4xl text-white bg-sky-700' />
                    <small>34,990 Fans</small>
                </div>
                <Link><small>Like</small></Link>
            </div>
            <div className='py-2 flex items-center justify-between gap-2'>
                <div className='flex gap-2 items-center'>
                    <FaTwitter className='p-1 text-4xl text-white bg-[#29C5F6]' />
                    <small>20,990 Followers</small>
                </div>
                <Link><small>Follow</small></Link>
            </div>
            <div className='py-2 flex items-center justify-between gap-2'>
                <div className='flex gap-2 items-center'>
                    <FaYoutube className='p-1 text-4xl text-white bg-[#DA4C40]' />
                    <small>50,000 Subscribers</small>
                </div>
                <Link><small>Subscribe</small></Link>
            </div>
        </div>
    );
};

export default Social;