import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;
  //font-family: 'Proba Pro Regular';
  //text-shadow: 0 0 1em blue, 0 0 0.2em blue;
  margin-right: 40px;
  align-items: center;
 
  
  a {
    text-decoration: none;
    color: white;
  }

  li {
    padding: 20px;
    font-size: 17px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: transparent;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 12vw;
    height: 100vh;
    width: 100vw;
    //width: 150px;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;
    text-transform: uppercase;
    
    li {
      color: white;
      z-index: 1;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link to="/artworks/">Концепция</Link></li>
      <li><Link to="/music/">Мероприятия</Link> </li>
      <li><Link to="/video/">Контакты</Link></li>
      {/* <li>About</li> */}
    </Ul>
  )
}

export default RightNav

