import React from "react"
import styled from "styled-components"

import {formatTopic} from './TopicList'

const ProjectView = styled.div``

export default function Project({ repo }) {
  const { name, description, homepageUrl, url, topics } = repo
  return (
    <ProjectView>
      <h3>{formatTopic(name)}</h3>
    </ProjectView>
  )
}
