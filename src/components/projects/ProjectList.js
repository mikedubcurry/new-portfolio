import React from "react"
import styled from 'styled-components'

import Project from "./Project"

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

export default function ProjectList({ repos, selected }) {
  const filterItems = (items, thing) => {
		if (!thing) return items

		return items.filter(({node}) => {
			return node.topics.edges.some(({node}) => {
				return node.topic.name === thing
			})
		})
	}
  return (
    <Projects>
      {filterItems(repos, selected).map(({ node }, i) => (
        <Project repo={node} key={i} />
      ))}
    </Projects>
  )
}
