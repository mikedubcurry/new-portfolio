import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  nav {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
`

const Nav = () => (
  <Header>
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  </Header>
)

export default Nav
