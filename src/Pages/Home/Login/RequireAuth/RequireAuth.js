import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    if(loading){
        <Spinner animation="border" variant="primary" />
    }
    if(user){
       <Navigate to="/details" state={{ from: location }} replace />;
        // navigate('/details')
    }
    if(!user){
        
        // navigate('/emaillogin')
        <Navigate to="/emaillogin" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;