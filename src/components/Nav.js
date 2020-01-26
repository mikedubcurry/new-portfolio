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
  }
`

const Nav = () => (
  <NavBar>
    <Link to="/">PROJECTS</Link>
    <Link to="/resume">RESUME</Link>
    <Link to="/contact">CONTACT</Link>
  </NavBar>
)

export default Nav
