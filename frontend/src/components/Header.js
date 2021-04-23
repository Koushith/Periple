import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Periple</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='/addpost'>
                  <Nav.Link>Add Post</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/featurerequest'>
                  <Nav.Link>Feature Request</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/profile'>
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
