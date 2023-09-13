import { Alert, Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/AuthProvider';

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm();
    const { createUser } = useContext(AuthContext);

    const location = useNavigate();

    const onSubmit = ({ email, password, name, photo }) => {
        createUser(email, password)
            .then((userInfo) => {
                const loggedUser = userInfo.user;
                setError("");
                setSuccess("User Created Successfully");
                location("/dashboard")
            })
            .catch((error) => {
                setSuccess("")
                setError(error.message)
            })
        reset();
    }

    return (
        <div className='max-w-screen-sm mx-auto my-8 bg-slate-50 p-4 rounded-lg'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <TextField {...register("name", { required: true })} type='text' label="Full Name" variant="standard" className='inline-block w-full pb-4' />
                <TextField {...register("email", { required: true })} id='outlined-email-input' label="Email" type='email' variant='standard' className='inline-block w-full' />
                <TextField {...register("photo", { required: true })} id="standard-basic" type='text' label="Only Photo Url" variant="standard" className='inline-block w-full' />
                <TextField {...register("password", { required: true })} id='outlined-password-input' label="Password" type='password' variant='standard' className='inline-block w-full' />
                <p>Already an Account? <Link to="/login" className='text-green-600 underline pb-2'>Login</Link></p>
                <p className='text-red-600'>{error}</p>
                <p className='text-green-600'>{success}</p>
                <Button variant="outlined" type='submit'>Register</Button>
            </form>
        </div>
    );
};

export default Register;