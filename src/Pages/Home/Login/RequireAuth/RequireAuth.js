import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    if(loading){
        <Spinner animation="border" variant="primary" />
    }
    if(!user){
        <Navigate to="/emaillogin" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;