import React, { useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//  emial login handled here
const EmailLogin = () => {
  const [validated, setValidated] = useState(false);

  //  sign with email
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate()
  if(loading){
    <Spinner animation="border" variant="primary" />
  }
  if(user){
    navigate('/home');
   
  }
  // submit button handled here


  const handleSubmit = event => {
  

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)

  }


  

  const navigateRegister = event => {
    navigate('/register');
    
  }
  // Handel password Reset
  const  handlePasswordReset =() =>{
    
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
    .then(() => {
      toast('Password Reset Link sent')
    })
  }

// email login from
  
  return (
    <div className='mx-auto w-50'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />

          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={handlePasswordReset} className='text-decoration-none' variant="link">Forget  Password?</Button>
      </Form>
      <p>New to fitness Store? <Link to="/register" className='text-danger text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p> <br></br> Or
      <GoogleLogin></GoogleLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default EmailLogin;