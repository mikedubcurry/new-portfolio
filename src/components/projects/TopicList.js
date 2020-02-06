import React from "react"
import styled from "styled-components"

const GridList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 60%;
  width: 100%;
  margin: 0 auto;
  justify-items: center;
  align-items: center;

  li {
    font-family: sans serif;
    box-sizing: content-box;
    padding: 0.5rem;
    transition: background 0.3s;
    width: 60%;
    text-align: center;

    &:hover {
      background: #ccc;
    }
    &:focus {
      outline: solid 2px #44b;
      background: #fff;
    }
    &.selected {
      color: white;
      background: #44b;
    }
  }
`

export default function TopicList({ topics, state }) {
  const [selected, setSelected] = state

  const handleEnter = e => {
    if (e.key === "Enter") {
      if (e.target.innerText === "All Projects") {
        return setSelected("")
      }

      return setSelected(unFormatTopic(e.target.innerText))
    }
  }

  return (
    <>
      <h1>Select a topic to filter projects</h1>
      <GridList>
        {topics.map((topic, i) => (
          <li
            className={selected === topic ? "selected" : ""}
            onKeyPress={handleEnter}
            tabIndex={0}
            onClick={() => setSelected(topic)}
            key={i}
          >
            {formatTopic(topic)}
          </li>
        ))}
        <li
          onKeyPress={handleEnter}
          tabIndex={0}
          onClick={() => setSelected("")}
          onKeyPress={handleEnter}
        >
          All Projects
        </li>
      </GridList>
    </>
  )
}

export function formatTopic(str) {
  if(/html/.test(str)) {
    return str.replace(/-/g, '/').toUpperCase()
  }

  let formatted = str.replace(/-/g, ' ')
  return `${formatted[0].toUpperCase()}${formatted.slice(1)}`
  // return /html/.test(str)
  //   ? str.replace(/-/g, "/").toUpperCase()
  //   : `${str[0].toUpperCase()}${str.slice(1)}`
}

function unFormatTopic(str) {
  return str.replace(/\//g, "-").toLowerCase()
}
