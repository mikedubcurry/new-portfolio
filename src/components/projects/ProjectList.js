import React from "react"
import styled from "styled-components"

import Project from "./Project"

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  // padding: .5rem;
  ${props =>
    props.grid
      ? `display: grid;
      grid-gap: .25rem 1rem;
  grid-template-columns: 1fr 1fr;`
      : "padding: 1rem 2rem;"}
`

export default function ProjectList({ repos, selected }) {
  const filterItems = (items, thing) => {
    if (!thing) return items

    return items.filter(({ node }) => {
      return node.topics.edges.some(({ node }) => {
        return node.topic.name === thing
      })
    })
  }
  return (
    <Projects grid={!selected ? true : false}>
      {filterItems(repos, selected).map(({ node }, i) => (
        <Project repo={node} key={i} />
      ))}
    </Projects>
  )
}
