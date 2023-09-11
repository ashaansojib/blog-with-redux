import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const user = "null";
    const loading = false;
    const location = useLocation();

    if(loading){
        return <CircularProgress />
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={{ from: location }} replace="true" to="/login" />
    );
};

export default PrivetRoute;