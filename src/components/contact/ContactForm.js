import React from "react"

import styled from "styled-components"

const TextInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: solid 1px #bbb;
  background: #ccc;

  &.error {
    background: #fa545caa;
  }
`

const TextArea = styled.textarea`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: solid 1px #bbb;
  background: #ccc;
  resize: none;

  &.error {
    background: #fa545caa;
  }
`

const Fields = styled.form`
  display: flex;
  flex-direction: column;
  font-family: sans serif;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  justify-content: space-evenly;
`

export default function ContactForm({ state, children, err }) {
  let { name, setName, email, setEmail, message, setMessage } = state

  return (
    <Fields>
      <TextInput
        className={`${err.input === 'name' ? 'error' : ''}`}
        autoComplete="off"
        id="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name,"
      />
      <br />

      <TextInput
        className={`${err.input === 'email' ? 'error' : ''}`}
        id="email"
        autoComplete="off"
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your email,"
      />
      <br />
      <TextArea
        className={`${err.input === 'message' ? 'error' : ''}`}
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
