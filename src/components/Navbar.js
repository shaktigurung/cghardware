import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Navbar extends Component {
  render() {
    return (
     <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="cghardware" className="navbar-brand" width="40%" />
      </Link>
       <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
               products
            </Link>
          </li>
       </ul> 
       <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            My Cart
          </ButtonContainer>
       </Link>
     </NavWrapper>
    )
  }
}
export default Navbar;

const NavWrapper = styled.nav `
  background:var(--mainGrey);
  .nav-link{
    color: var(--mainBlue) !important;
    font-size: 1.3rem;
    text-transform: capitalize ;
  }
`


