import { Avatar, TextField } from '@mui/material';
import React from 'react';

const PostComment = () => {
    return (
        <div className='my-4'>
            <div>
                <div className='py-3 space-y-4'>
                    <div className='p-2 bg-slate-100 rounded-xl'>
                        <div className='flex items-center gap-2'>
                            <Avatar alt="Remy Sharp" src="" />
                            <h4 className='font-medium text-green-500'>Ashaduzzaman Sojib</h4>
                        </div>
                        <p className='italic font-[10px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt.</p>
                    </div>
                    <div className='p-2 bg-slate-100 rounded-xl'>
                        <div className='flex items-center gap-2'>
                            <Avatar alt="Remy Sharp" src="" />
                            <h4 className='font-medium text-green-500'>Ashaduzzaman Sojib</h4>
                        </div>
                        <p className='italic font-[10px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt.</p>
                    </div>
                    <div className='p-2 bg-slate-100 rounded-xl'>
                        <div className='flex items-center gap-2'>
                            <Avatar alt="Remy Sharp" src="" />
                            <h4 className='font-medium text-green-500'>Ashaduzzaman Sojib</h4>
                        </div>
                        <p className='italic font-[10px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt.</p>
                    </div>
                </div>
            </div>
            {/* comment form */}
            <div className='p-2 my-2 bg-slate-50'>
                <div className='flex gap-3 justify-center'>
                    <TextField id="outlined-basic" label="Your Name" variant="outlined" className='w-2/3' />
                    <TextField id="outlined-basic" label="Your Email" variant="outlined" className='w-2/3' />
                </div>
                <textarea name="" id="" cols="10" rows="5" placeholder='Type Your comments' className='border w-full p-2 mt-2'></textarea>
                <div className='flex justify-end'>
                    <input type="submit" value="Leave Your Comment" className='my-2 hover:text-green-600 cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default PostComment;