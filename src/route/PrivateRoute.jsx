import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext); 

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to="/login" replace={true} />
    );
};

export default PrivateRoute;