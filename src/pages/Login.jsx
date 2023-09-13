import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const { userLogin, singInWithGoogle } = useContext(AuthContext);

    const location = useNavigate();

    const onSubmit = ({ email, password }) => {
        userLogin(email, password)
            .then((loggedUser) => {
                setError("")
                setSuccess("User Login Successfully")
                location("/dashboard")
            })
            .catch((error) => {
                setSuccess("")
                setError(error.message)
            })
    }
    const googleLogin = () => {
        singInWithGoogle()
        location("/")
    }
    return (
        <div className='max-w-screen-sm mx-auto my-8 bg-slate-50 p-4 rounded-lg'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <TextField {...register("email", { required: true })} defaultValue="ashaduzzamansojib67@gmail.com" id='outlined-email-input' label="Email" type='email' variant='standard' className='inline-block w-full' />
                <TextField {...register("password", { required: true })} defaultValue="asasas" id='outlined-password-input' label="Password" type='password' variant='standard' className='inline-block w-full' />
                <p>Not registered? <Link to="/register" className='text-green-600 underline pb-2'>Register</Link></p>
                <p className='text-red-600'>{error}</p>
                <p className='text-green-600'>{success}</p>
                <Button variant="outlined" type='submit'>Login</Button>
            </form>
            <button onClick={googleLogin} className='text-blue-600 mt-2'>Direct Login</button>
        </div>
    );
};

export default Login;