import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)

  }
  return (
    <div className='mb-0'>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Fitness Store</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>

              <Nav.Link href="allinventory">Inventory</Nav.Link>
              {

                user ?
                  <>
                  
                  <Nav.Link href="/manageitems">Manage Items</Nav.Link>
                  <Nav.Link href="/additem">Add Item</Nav.Link>
                  <Nav.Link href="/myitems">My Items</Nav.Link>
                   <Button onClick={handleSignOut}>Sign Out</Button>
                  </>
                  :

                  <Nav.Link href="emaillogin">Login</Nav.Link>


              }
            </Nav>
          </Container>
        </Navbar>
        <br />

      </>
    </div>
  );
};

export default Header;