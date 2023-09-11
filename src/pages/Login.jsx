import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <div className='max-w-screen-sm mx-auto my-8 bg-slate-50 p-4 rounded-lg'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <TextField {...register("email", { required: true })} id='outlined-email-input' label="Email" type='email' variant='standard' className='inline-block w-full' />
                <TextField {...register("password", { required: true })} id='outlined-password-input' label="Password" type='password' variant='standard' className='inline-block w-full' />
                <p>Not registered? <Link to="/register" className='text-green-600 underline pb-2'>Login</Link></p>
                <Button variant="outlined" type='submit'>Login</Button>
            </form>
        </div>
    );
};

export default Login;