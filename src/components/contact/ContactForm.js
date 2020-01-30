import React from "react"

import styled from "styled-components"

const TextInput = styled.input`
  padding: .5rem 1rem;
  border-radius: 10px;
  border: solid 1px #bbb;
  background: #ccc;
`

 const TextArea = styled.textarea`
 padding: .5rem 1rem;
 border-radius: 10px;
 border: solid 1px #bbb;
 background: #ccc;
 resize: none;
 `

const Fields = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  justify-content: space-evenly;
`

export default function ContactForm({ state, children }) {
  let { name, setName, email, setEmail, message, setMessage } = state

  return (
    <Fields>
        <TextInput
          autoComplete="off"
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name,"
        />
        <br />

        <TextInput
          id="email"
          autoComplete="off"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your email,"
        />
        <br />
        <TextArea
          id="message"
          autoComplete="off"
          rows="5"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="and a brief message."
        />
        {children}
    </Fields>
  )
}
