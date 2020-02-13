import React from "react"
import styled from "styled-components"

import { formatTopic } from "./TopicList"

const ProjectView = styled.div`
  font-family: Montserrat;
  font-style: oblique;
  a {
    color: unset;
    cursor: pointer;
    color: #7700ee;
  }
  p {
    padding: 0 0.5rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: bolder;
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
        <a target="_blank" rel="noopener noreferrer" href={url}>
          {formatTopic(name)}
        </a>
      </h3>
      <p>{shortedText(description)}</p>
    </ProjectView>
  )
}
