import React from "react"
import styled from 'styled-components'

const Job = styled.li`
  list-style: none;
  font-size: 0.9rem;

  h4 {
    font-size: 1rem;
  }
  p, span {
    padding-left: 1rem;
  }
  ul {
    padding-left: 2rem;
  }
  li {
    list-style: disc;
  }
`

export default function WorkExp({ exp }) {
  return (
    <Job>
      <h4>{exp.title}</h4>
      <p>{exp.company}</p>
      <span>
        {exp.current ? `${exp.start} - Present` : `${exp.start} - ${exp.end}`}
      </span>
      <ul>
        {exp.duties.map((duty, i) => (
          <li key={i}>{duty}</li>
        ))}
      </ul>
    </Job>
  )
}
