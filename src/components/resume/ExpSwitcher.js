import React, { useReducer } from "react"
import styled from "styled-components"

import WorkExp from "./WorkExp"

const Button = styled.button`
  font-size: 0.75rem;
  font-family: sans serif;
  font-weight: bold;
  // position: relative;
  // bottom: 1rem;
  border: none;
  cursor: pointer;
  background: #aaa;
  transition: all 0.2s;
  color: #fff;

  &:hover,
  &:focus {
    background: #bbb;
  }
`

const Left = styled(Button)`
  padding: 0.5rem 0.25rem 0.5rem 1.5rem;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  // left: 1rem;

  &:hover,
  &:focus {
    left: 1.2rem;
  }
  &:active {
    left: 0.8rem;
  }
`

const Right = styled(Button)`
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  // right: 1rem;
  padding: 0.5rem 1.5rem 0.5rem 0.25rem;

  &:hover,
  &:focus {
    right: 1.2rem;
  }
  &:active {
    right: 0.8rem;
  }
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
  &:active {
    transform: scale(0.8);
  }

  &.current {
    transform: scale(2);
  }
`

const Dots = styled.ul`
  // position: relative;
  // left: 25%;
  // bottom: 1.5rem;
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
const Controls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export default function ExpSwitcher(props) {
  let exp = props.exp
  const [state, dispatch] = useReducer(reducer, { len: exp.length, curr: 0 })

  return (
    <>
      <WorkExp exp={exp[state.curr]} />
      <Controls>
        <Left onClick={() => dispatch({ type: "backwards" })}>prev</Left>
        <Dots>
          {exp.map((_, i) => (
            <li key={i}>
              <Dot
                onClick={() => dispatch({ type: "set", payload: i })}
                className={`${state.curr === i ? "current" : ""}`}
              ></Dot>
            </li>
          ))}
        </Dots>
        <Right onClick={() => dispatch({ type: "forwards" })}>next</Right>
      </Controls>
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
