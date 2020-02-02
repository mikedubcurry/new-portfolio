import React from "react"
import styled from "styled-components"

const SkillItem = styled.li`
  list-style: none;

  p {
    font-size: 1.5rem;
    font-family: sans serif;
  }
  div {
    font-size: 1rem;
    text-align: center;
  }
`

export default function Skill({ skill }) {
  return (
    <SkillItem>
      <p>{skill.topic}</p>
      <div>{skill.exp > 1 ? `${skill.exp} years` : "1 year"}</div>
    </SkillItem>
  )
}
