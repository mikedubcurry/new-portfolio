import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const BurgerBtn = styled.div`
  outline: none;
  width: 3rem;
  height: 3rem;
  position: absolute;
  z-index: 5;
  top: 1rem;
  right: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .top,
  .mid,
  .bot {
    height: 0.6rem;
    background: #222;
    transition: transform 0.4s, opacity 0.2s;
    border-radius: 4rem;
    opacity: 1;
  }

  .top.open {
    transform: rotate(405deg) translate(0.82rem, 0.82rem);
  }
  .mid.open {
    opacity: 0;
  }
  .bot.open {
    transform: rotate(315deg) translate(0.82rem, -0.82rem);
  }

  @media screen and (min-width: 630px) {
    display: none;
  }
`

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: unset;
  flex-direction: column;
  transform: translateY(-100%);

  a {
    font-weight: 600;
    color: white;
    text-decoration: none;
    font-size: 2rem;
    transform: translateY(-33%);
    font-family: sans serif;
    transition: all 0.3s;

    &.current {
      color: darkblue;
    }

    &:active {
      color: orange;
    }
  }

  @media screen and (min-width: 630px) {
    transform: none;
    width: 50%;
    flex-direction: row;
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
      transition: all 0.3s;

      &.current {
        color: yellow;
      }

      &:hover {
        transform: translateY(-45%);
      }
      &:active {
        transform: translateY(-33%);
      }
    }
  }
`

const Nav = () => (
  <>
    <MenuBtn />
    <NavBar>
      <Link activeClassName="current" to="/">
        PROJECTS
      </Link>
      <Link activeClassName="current" to="/resume">
        RESUME
      </Link>
      <Link activeClassName="current" to="/contact">
        CONTACT
      </Link>
    </NavBar>
  </>
)

export default Nav

function MenuBtn() {
  const [open, setOpen] = useState(false)

  return (
    <BurgerBtn tabIndex={0} onClick={() => setOpen(!open)}>
      <div className={`top ${open ? "open" : ""}`}></div>
      <div className={`mid ${open ? "open" : ""}`}></div>
      <div className={`bot ${open ? "open" : ""}`}></div>
    </BurgerBtn>
  )
}
