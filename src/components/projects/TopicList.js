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
    padding: 0.5rem;

    &:focus {
      border: solid 1px red;
    }
  }
`

export default function TopicList({ topics, state }) {
  const [selected, setSelected] = state

  const PronounCase = str => `${str[0].toUpperCase()}${str.slice(1)}`
  console.log(selected)
  const handleEnter = e => {
    if (e.key === "Enter") {
      setSelected(e.target.innerText.replace(/\//g, "-").toLowerCase())
    }
  }
  return (
    <>
      <h1>Select a topic to filter projects</h1>
      <GridList>
        {topics.map((topic, i) => (
          <li
            onKeyPress={handleEnter}
            tabIndex={0}
            onClick={() => setSelected(topic)}
            key={i}
          >
            {/html/.test(topic)
              ? topic.replace(/-/g, "/").toUpperCase()
              : PronounCase(topic)}
          </li>
        ))}
        <li
          onKeyPress={handleEnter}
          tabIndex={0}
          onClick={() => setSelected("")}
          onKeyPress={e => (e.key === "Enter" ? setSelected("") : null)}
        >
          All projects
        </li>
      </GridList>
    </>
  )
}
