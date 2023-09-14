import React from 'react';
import { usePostArticlesMutation } from '../redux/features/api/baseApi';
import { useForm } from 'react-hook-form';
import { Alert } from '@mui/material';

const AddPosts = () => {
    const [setArticles, { data: articles }] = usePostArticlesMutation();
    console.log(articles)
    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        setArticles(data)
        reset();
    }

    return (
        <div className='px-8'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-3 gap-4'>
                    <input {...register("title", { required: true })} type="text" placeholder='Title' className='article-field' />
                    <input {...register("category", { required: true })} type="text" placeholder='Category' className='article-field' />
                    <input {...register("image", { required: true })} type="text" placeholder='Banner Url' className='article-field' />
                    <input type="date" {...register("date", { required: true })} className='article-field' />
                </div>
                <textarea {...register("info", { required: true })} id="" cols="30" rows="10" placeholder='Post Description' className='p-2 border w-full border-blue-600'></textarea>
                <div className='flex justify-end gap-3'>
                    {/* <button className='inline-block py-2 px-3 border font-medium border-blue-600 rounded-md hover:bg-blue-600 hover:text-white'>Draft</button> */}
                    <button className='inline-block py-2 px-3 border font-medium border-blue-600 rounded-md hover:bg-blue-600 hover:text-white'>Published</button>
                </div>
            </form>
        </div>
    );
};

export default AddPosts;