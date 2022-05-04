import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();



    

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (user) {
        navigate('/details')
      }
    return (
        <div>
           <Button onClick={()=>signInWithGoogle()} className='mx-auto p-2 bg-dark'>Sign in with Google</Button> 
        </div>
    );
};

export default GoogleLogin;