import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './Navbar.css'

const header = () => {
    return (
        <Navbar bg="white" expand="lg">
            {/* <LinkContainer to="/home">
  <Navbar.Brand>React-Bootstrap</Navbar.Brand>
  </LinkContainer> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer exact to="/">
      <Nav.Link active={false}>Home</Nav.Link>
      </LinkContainer>
        <LinkContainer exact to="/about" >
      <Nav.Link active={false} >About Me</Nav.Link>
      </LinkContainer>
      <LinkContainer exact to="/projects">
      <Nav.Link active={false}>Projects</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default header
