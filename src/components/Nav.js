import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavBar = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 3;
  left: 25%;
  top: 5%;
  a {
    font-weight: 600;
    color: white;
    text-decoration: none;
    font-size: 2rem;
    transform: translateY(-33%);
    font-family: sans serif;
    transition: all .3s;
    
    &.current {
      color: yellow;
    }

    &:hover {
      transform: translateY(-45%);
    }
  }
`

const Nav = () => (
  <NavBar>
    <Link activeClassName='current' to="/">PROJECTS</Link>
    <Link activeClassName='current' to="/resume">RESUME</Link>
    <Link activeClassName='current' to="/contact">CONTACT</Link>
  </NavBar>
)

export default Nav
