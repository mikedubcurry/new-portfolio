import React from "react"
import styled from "styled-components"

import { formatTopic } from "./TopicList"

const ProjectView = styled.div`
  font-family: "Roboto";

  a {
    color: unset;
    cursor: pointer;
    color: #353535;
  }
`

export default function Project({ repo }) {
  const { name, description, url } = repo

  const shortedText = str => {
    if (!str) {
      return ""
    }
    if (str.split(" ").length < 10) {
      return str
    }
    return `${str
      .split(" ")
      .slice(0, 9)
      .join(" ")}...`
  }

  return (
    <ProjectView>
      <h3>
        <a target="_blank" href={url}>
          {formatTopic(name)}
        </a>
      </h3>
      <p>{shortedText(description)}</p>
    </ProjectView>
  )
}
