import React from "react"
import styled from 'styled-components'

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  p {
    font-size: 1rem;
    font-family: sans serif;
  }

  h1 {
    font-family: sans serif;
    font-size: 1.5rem;
    text-decoration: solid underline #999999a0;
  }
`

export default function Info() {
  return (
    <Text>
    <h1>Getting ahold of me</h1>
      <p>
        I am currently seeking full-time employment opportunities or shorter
        term gigs so please feel free to send me a message. I will get back to
        you within a day or two.
      </p>
      <p>Just enter your name, an email I can reach you at and a brief message. </p>
    </Text>
  )
}
