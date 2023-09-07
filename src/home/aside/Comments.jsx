import { Avatar } from '@mui/material';
import React from 'react';

const Comments = () => {
    return (
        <div className=''>
            <div className='border-b'>
                <button className='p-2 bg-slate-800 text-white font-medium'>Recent Comments</button>
            </div>
            <div className='py-3'>
                <div className='pb-2'>
                    <div className='flex items-center gap-2'>
                        <Avatar alt="Remy Sharp" className='border' src="https://drive.google.com/file/d/1hS88pQkL2-IShnBVw_GgRluRShcjnFpp/view?usp=drive_link" />
                        <h4 className='font-medium'>Ashaduzzaman Sojib</h4>
                    </div>
                    <p className='italic font-[10px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt.</p>
                </div>
                <div className='pb-2'>
                    <div className='flex items-center gap-2'>
                        <Avatar alt="Remy Sharp" className='border' src="https://drive.google.com/file/d/1hS88pQkL2-IShnBVw_GgRluRShcjnFpp/view?usp=drive_link" />
                        <h4 className='font-medium'>Ashaduzzaman Sojib</h4>
                    </div>
                    <p className='italic font-[10px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt.</p>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <Avatar alt="Remy Sharp" className='border' src="https://drive.google.com/file/d/1hS88pQkL2-IShnBVw_GgRluRShcjnFpp/view?usp=drive_link" />
                        <h4 className='font-medium'>Ashaduzzaman Sojib</h4>
                    </div>
                    <p className='italic font-[10px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt.</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;