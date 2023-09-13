import React from 'react';

const AddPosts = () => {
    return (
        <div className='px-8'>
            <div className='grid grid-cols-3 gap-4'>
                <input type="text" placeholder='Title' className='article-field' />
                <input type="text" placeholder='Category' className='article-field' />
                <input type="text" placeholder='Banner Url' className='article-field' />
                <input type="date" className='article-field' />
            </div>
            <textarea name="" id="" cols="10" rows="5" placeholder='Post Description' className='p-2 border w-full border-blue-600'></textarea>
            <div className='flex justify-end gap-3'>
                <button className='inline-block py-2 px-3 border font-medium border-blue-600 rounded-md hover:bg-blue-600 hover:text-white'>Draft</button>
                <button className='inline-block py-2 px-3 border font-medium border-blue-600 rounded-md hover:bg-blue-600 hover:text-white'>Published</button>
            </div>
        </div>
    );
};

export default AddPosts;