import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../utils/AuthProvider';
import { CircularProgress } from '@mui/material';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user)
    const location = useLocation();
    if(loading){
        return <CircularProgress />
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;