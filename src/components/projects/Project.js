import React from "react"
import styled from "styled-components"

import {formatTopic} from './TopicList'

const ProjectView = styled.div``

export default function Project({ repo }) {
  const { name, description, homepageUrl, url, topics } = repo

  const shortedText = str => {
    if(!str) {
      return ''
    }
    if(str.split(' ').length < 10)
    {
      return str
    }
    return `${str.split(' ').slice(0,9).join(' ')}...`
  }
  
  return (
    <ProjectView>
      <h3>{formatTopic(name)}</h3>
      <p>{shortedText(description)}</p>
    </ProjectView>
  )
}
