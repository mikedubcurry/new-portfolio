import React from "react"
import styled from "styled-components"

const GridList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    font-family: "Roboto";
    text-align: center;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 60%;
    width: 100%;
    margin: 0 auto;
    justify-items: center;
    align-items: center;

    li {
      font-family: "Montserrat";
      font-weight: bold;
      box-sizing: content-box;
      padding: 0.5rem;
      transition: background 0.2s;
      border-radius: 8px;
      width: 80%;
      text-align: center;
      border: 2px #ccc solid;

      &:hover {
        background: #ccc;
      }
      &:focus {
        outline: none;
        border: solid 2px #44b;
        border-radius: 8px;
        background: #fff;
      }
      &.selected {
        color: white;
        background: #44b;
      }
    }
  }
  @media screen and (min-width: 630px) {
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
      <GridList>
        <h1>Select a topic to filter projects</h1>
        <ul>
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
        </ul>
      </GridList>
    </>
  )
}

export function formatTopic(str) {
  if (/html/.test(str)) {
    return str.replace(/-/g, "/").toUpperCase()
  }

  let formatted = str.replace(/-/g, " ")
  return `${formatted[0].toUpperCase()}${formatted.slice(1)}`
}

function unFormatTopic(str) {
  return str.replace(/\//g, "-").toLowerCase()
}
