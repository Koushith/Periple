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

import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../redux/actions/userActions';

function Header() {
  // get obj from state
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
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
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id='userName'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/addpost'>
                      <NavDropdown.Item>Add Post</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/featurerequest'>
                      <NavDropdown.Item>Feature Request</NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <i className='fas fa-user'></i>Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
