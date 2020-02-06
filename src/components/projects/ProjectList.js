import React from "react"

import Project from "./Project"

export default function ProjectList({ repos }) {
  console.log(repos)
  return (
    <div>
      {repos.map(({ node }, i) => (
        <Project repo={node} key={i} />
      ))}
    </div>
  )
}
