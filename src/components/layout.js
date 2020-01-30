import React from "react"

import "./layout.css"
import Nav from "./Nav"




const Layout = ({ children }) => (
  <>
    <Nav />
    <div className="top-of-box"></div>
    <main>{children}</main>
  </>
)

export default Layout
