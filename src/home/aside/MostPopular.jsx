import React from 'react';
import { Link } from 'react-router-dom';

const MostPopular = () => {
    return (
        <div className='py-2'> 
            <div className='border-b'>
                <button className='p-2 bg-slate-800 text-white font-medium'>Most Popular</button>
            </div>
            <div className='py-3'>
                <div className='flex justify-between items-center gap-3 py-3'>
                    <img className='w-[100px] h-[px]' src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/girl2.jpg" alt="" />
                    <div>
                        <Link><h4 className='font-medium hover:text-green-500'>How to remove android phone locks?</h4></Link>
                        <span className='text-[10px] text-gray-700'>Septembar 10, 2023</span>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-3 py-3'>
                    <img className='w-[100px] h-[px]' src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/girl2.jpg" alt="" />
                    <div>
                        <Link><h4 className='font-medium hover:text-green-500'>How to remove android phone locks?</h4></Link>
                        <span className='text-[10px] text-gray-700'>Septembar 10, 2023</span>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-3 py-3'>
                    <img className='w-[100px] h-[px]' src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/girl2.jpg" alt="" />
                    <div>
                        <Link><h4 className='font-medium hover:text-green-500'>How to remove android phone locks?</h4></Link>
                        <span className='text-[10px] text-gray-700'>Septembar 10, 2023</span>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-3 py-3'>
                    <img className='w-[100px] h-[px]' src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/girl2.jpg" alt="" />
                    <div>
                        <Link><h4 className='font-medium hover:text-green-500'>How to remove android phone locks?</h4></Link>
                        <span className='text-[10px] text-gray-700'>Septembar 10, 2023</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostPopular;