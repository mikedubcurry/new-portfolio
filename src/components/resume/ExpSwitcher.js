import React, { useReducer } from "react"
import styled from "styled-components"

import WorkExp from "./WorkExp"

const Button = styled.button`
  font-size: 0.75rem;
  font-family: sans serif;
  position: absolute;
  bottom: 1rem;
  border: none;
  cursor: pointer;
  background: #555;
  transition: all 0.2s;
  color: #fff;

  &:hover {
    background: #666;
  }
`

const Left = styled(Button)`
  padding: 0.5rem 0.25rem 0.5rem 1.5rem;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  left: 1rem;
`

const Right = styled(Button)`
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  right: 1rem;
  padding: 0.5rem 1.5rem 0.5rem 0.25rem;
`

const Dot = styled.div`
  background: #44f;
  width: 8px;
  height: 8px;
  transition: all 0.2s;
  border-radius: 8px;

  &:hover {
    transform: scale(1.5);
  }

  &.current {
    transform: scale(2);
  }
`

const Dots = styled.ul`
  position: absolute;
  left: 25%;
  bottom: 1.5rem;
  width: 50%;
  height: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    width: 50%;
    height: 100%;
    margin: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  }
`

export default function ExpSwitcher(props) {
  // exp = [ { title, company, start, end, duties, current } ]
  let exp = props.exp
  const [state, dispatch] = useReducer(reducer, { len: exp.length, curr: 0 })
  // store first item in exp as 'current' state

  return (
    <>
      <WorkExp exp={exp[state.curr]} />
      <Left onClick={() => dispatch({ type: "backwards" })}>prev</Left>
      <Right onClick={() => dispatch({ type: "forwards" })}>next</Right>
      <Dots>
        {exp.map((_, i) => (
          <li key={i} onClick={() => dispatch({ type: "set", payload: i })}>
            <Dot className={`${state.curr === i ? "current" : ""}`}></Dot>
          </li>
        ))}
      </Dots>
    </>
  )
}

function reducer({ len, curr }, action) {
  switch (action.type) {
    case "forwards":
      return { len, curr: (curr + 1) % len }

    case "backwards":
      return { len, curr: --curr < 0 ? len - 1 : curr }

    case "set":
      return { len, curr: action.payload }

    default:
      throw new Error("something weird is happening with the reducer")
  }
}
