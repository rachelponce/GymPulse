import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, Nav, Logo, NavItem } from './Header.styled';

const Header = () => (
	<HeaderWrapper>
    <Logo>Gym Pulse</Logo>
    <Nav>
      <NavItem>Home</NavItem> 
      <NavItem>About</NavItem>
      <NavItem>Contact</NavItem>
	  <NavItem>Login</NavItem>
    </Nav>
  </HeaderWrapper>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
