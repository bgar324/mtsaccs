// src/components/MyNavbar.jsx
import "../styles/MyNavbar.css"
// src/components/MyNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="masterNav">
        <Container className="navContainer">
          {/* Left-aligned logo and text */}
          <Navbar.Brand href="/" className="navBrand">
            <img
              src="/static/rubber duck.png"
              alt="Logo"
              className="rubberDuckImage"
            />
            <h2 className="ms-2 spanshit">at Mt. SAC</h2>
          </Navbar.Brand>

          {/* Right-aligned links and button */}
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="navLinksRight">
            <Nav className="align-items-center ms-auto navLinks">
              <Nav.Link href="/about">about</Nav.Link>
              <Nav.Link href="/events">events</Nav.Link>
              <Nav.Link href="/team">team</Nav.Link>
              <Nav.Link href="/projects">projects</Nav.Link>
              <Button variant="outline-warning" href="/join-us" className="join-button">
                join us
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="spacer">text</div>
    </>

  );
};

export default MyNavbar;