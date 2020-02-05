import React from "react"
import styled from "styled-components"

const SkillItem = styled.li`
  list-style: none;
  font-family: sans serif;

  p {
    font-size: 1.5rem;
  }
  div {
    font-size: .9rem;
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
