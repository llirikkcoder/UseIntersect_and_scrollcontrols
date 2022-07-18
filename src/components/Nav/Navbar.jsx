import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from "react-router-dom";

const Nav = styled.nav`
  nav {
    width: 100vw;
  }
  height: 55px;
  padding: 15px 30px;
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;


  @media (min-width: 768px) {
    width: 100%;
  }

  .logo {
    padding: 15px 0;
    color:  white;
    //font-family: 'Proba Pro Regular';
    font-style: normal;
    //font-size: 20px;
    //letter-spacing: 15px;
    align-items: center;
    //text-shadow: 0 0 1em blue, 0 0 0.2em blue;
    z-index: 1;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
  }
`

const Navbar = () => {
  return (
    <Nav >
      <div className="logo">
        <Link to="/">medialounge24</Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
