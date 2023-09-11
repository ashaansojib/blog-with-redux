import React from 'react';

const AddPosts = () => {
    return (
        <div className='grid grid-cols-3 gap-2'>
            <input type="text" name="" id="" className='p-2 border rounded-md'/>
            <input type="date" name="" id="" className='p-2 border rounded-md'/>
            <textarea name="" id="" cols="10" rows="5" placeholder='Post Description' className='p-2 border'></textarea>
        </div>
    );
};

export default AddPosts;