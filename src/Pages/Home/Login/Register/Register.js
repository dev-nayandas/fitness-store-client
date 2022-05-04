import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';




// Rgistration handled here
const Register = () => {



    // user creted here
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();


    // handle submit button

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)

    }
    // email verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('email verification  sent')
            })
    }

    const navigateLogin = event => {
        navigate('/emaillogin')

    }
    if(loading){
        <Spinner animation="border" variant="primary" />
    }
    if (user) {
        verifyEmail()
        navigate('/details');

    }



// Registration from

    return (
        <div className='w-25 mx-auto'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" required />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Already Registed <Link to="/emaillogin" onClick={navigateLogin} className='text-danger pe-auto text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;