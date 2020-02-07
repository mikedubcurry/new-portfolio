import React from "react"

import Project from "./Project"

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
    <div>
      {filterItems(repos, selected).map(({ node }, i) => (
        <Project repo={node} key={i} />
      ))}
    </div>
  )
}
