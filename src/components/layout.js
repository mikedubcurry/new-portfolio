import React from "react"

import Nav from "./Nav"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Nav />
    <div className="top-of-box"></div>
    <main>{children}</main>
  </>
)

export default Layout
