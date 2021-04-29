import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

import AuthNav from './AuthNav';

import './MainNav.css';
import { Nav } from 'react-bootstrap';
// import logo from '../../../images/logo-192x192.png';

const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand='md' variant='light' bg='light'>
      <Container>
        {/* Logo */}
        <LinkContainer to='/'>
          <Navbar.Brand className='logo'>Go for games</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'
        >
          <AuthNav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
