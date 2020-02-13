import React from "react"
import styled, { keyframes } from "styled-components"

const transforms = {
  left: keyframes`
    from {
      transform: translate(0);
    }
    to {
      transform: translate(-7px, 5px);
    }
  `,
  center: keyframes`
    from {
      transform: translate(0);
    }
    to {
      transform: translate(0px, 5px);
    }
  `,
  right: keyframes`
    from {
      transform: translate(0);
    }
    to {
      transform: translate(7px, 5px);
    }
  `,
}

const shadows = {
  left: keyframes`
    from {
      box-shadow: none;
    }
    to{
      box-shadow: 4px -4px 4px 0px #999;
    }
  `,
  center: keyframes`
    from {
      box-shadow: none;
    }
    to{
      box-shadow: 0px -4px 4px 2px #999;
    }
  `,
  right: keyframes`
    from {
      box-shadow: none;
    }
    to{
      box-shadow: -4px -4px 4px 0px #999;
    }
  `,
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const PanelBody = styled.div.attrs(props => ({
  first: props.first,
  ct: props.ct,
  pos: props.pos,
}))`
height:90vh;
  // min-height: 50vh;
  width: 90%;
  margin: 0 0.5rem;
  margin-bottom: 1rem;
  opacity: 0;
  padding: 1rem 2rem;
  background: #f0f0f0;
  transition: all;
  border-radius: 10px;
  animation: ${fadeIn} 1s ease forwards;

  ${props => (props.first ? "margin-top: 7rem;" : "")}

  @media screen and (min-width: 630px) {
    margin: 0;
    height: 80%;
    width: calc(90% / ${props => props.ct});
    animation: ${fadeIn} 1s ease forwards,
      ${props => {
          switch (props.pos) {
            case "left":
              return transforms["left"]
            case "center":
              return transforms["center"]

            case "right":
              return transforms["right"]
            default:
              return transforms["center"]
          }
        }}
        0.5s 1s ease forwards,
      ${props => {
          switch (props.pos) {
            case "left":
              return shadows["left"]
            case "center":
              return shadows["center"]
            case "right":
              return shadows["right"]
            default:
              return shadows["center"]
          }
        }}
        0.5s 1s ease forwards;
  }
`

export default function Panel({ children, first, ct, pos }) {
  return (
    <PanelBody first={first} pos={pos} ct={ct}>
      {children}
    </PanelBody>
  )
}
