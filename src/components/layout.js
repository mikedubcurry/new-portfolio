import React, { useState } from "react"

import "./layout.css"
import Nav from "./Nav"

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <Nav state={[navOpen, setNavOpen]} />
      <div className="top-of-box"></div>
      <main onClick={() => setNavOpen(false)}>{children}</main>
    </>
  )
}

export default Layout
