import React from "react"
import styled from "styled-components"

const GridList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50%;
  width: 100%;
  margin: 0 auto;
  justify-items: center;
  align-items: center;

  li {
    padding: .5rem;
  }
`

export default function TopicList({ topics, state }) {
  const [selected, setSelected] = state
  console.log(selected)
  return (
    <>
      <h1>Select a topic to filter projects</h1>
      <GridList>
        {topics.map((topic, i) => (
          <li onClick={() => setSelected(topic)} key={i}>{topic}</li>
        ))}
        <li onClick={() => setSelected('')}>All projects</li>
      </GridList>
    </>
  )
}
