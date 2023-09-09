import React from 'react';

const Author = () => {
    return (
        <div className='flex p-2 gap-3 items-center bg-slate-200 mt-2'>
            <div className='w-[200px]'>
                <img src="https://i.pinimg.com/564x/84/aa/fa/84aafafc69a9e72058f4b780bbf8d272.jpg" alt="" />
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Ashaduzzaman Sojib</h3>
                <p className='font-medium'>Web Developer</p>
                <p className='italic text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis tempora accusamus cupiditate facilis sint.</p>
            </div>
        </div>
    );
};

export default Author;