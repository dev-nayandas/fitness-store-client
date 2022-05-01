import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';


const Header = () => {
    return (
        <div className='mb-0'>
            <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
    
      <Nav.Link href="allinventory">Inventory</Nav.Link>
      <Nav.Link href="emaillogin">Login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
 
</>
        </div>
    );
};

export default Header;