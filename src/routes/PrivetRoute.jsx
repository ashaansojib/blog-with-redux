import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../utils/AuthProvider';
import { CircularProgress } from '@mui/material';

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='w-[100px] mx-auto pt-20'>
            <CircularProgress />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;