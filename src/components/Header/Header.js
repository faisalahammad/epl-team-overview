import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='header'>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">EPL Team Overview</Navbar.Brand>
          <Nav className="my-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/teams">Teams</Nav.Link>
            <Nav.Link href="/table">Points Table</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    </div>
  );
};

export default Header;