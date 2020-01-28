import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Frame = styled.div`
  margin: 0rem auto;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  clip-path: circle(75px);
`

const Text = styled.div`
  padding: 1rem;

  h1 {
    font-family: sans serif;
    font-size: 1.5rem;
    text-decoration: solid underline #999999a0;
  }
  .gh {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  a {
    color: #353535;
    font-family: sans serif;
  }
`

export default function Bio({ me, selfie }) {
  return (
    <>
      <Frame>
        <Img
          title="Selfie"
          alt="A nice picture of Michael"
          fixed={selfie.fixed}
        />
      </Frame>
      <Text>
        <h1>{me.name}</h1>
        <p className="gh">
          Github Profile:{" "}
          <a href={`https://github.com/${me.github}`}>{me.github}</a>
        </p>
        <p>{me.bio}</p>
      </Text>
    </>
  )
}
