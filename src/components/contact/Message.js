import React, { useState } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import styled from "styled-components"

import ContactForm from "./ContactForm"

// create error styles to alert if a field is empty
// display error text if exists

const FormButton = styled.button`
  width: 80%;
  align-self: center;
  margin-top: 2rem;
  border-radius: 10px;
  border: none;
  padding: .5rem 1rem;
  transition: all .2s;
  color: #333;
  font-family: sans serif;
  font-size: .9rem;
  height:  10%;
`

const Submit = styled(FormButton)`
  background:  #75d0aa;

  &:hover {
    background: lightblue;
  }
`

const Verify = styled(FormButton)`
  background: darkorange;
  font-size: .8rem;

  &:hover {
    background: orange;
  }
`

function VerifyButton({ handleVerify }) {
  return <Verify onClick={handleVerify}>Prove you're not a bot</Verify>
}

function SubmitButton({ handleSubmit }) {
  return <Submit onClick={handleSubmit}>Submit</Submit>
}

export default function Message() {
  const [token, setToken] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  let error

  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleVerify = async e => {
    e.preventDefault()

    if (!executeRecaptcha) {
      console.log("ReCaptcha is not working")
      return
    }
    const result = await executeRecaptcha("contact")

    setToken(result)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const body = { name, email, message, token }

    const response = await fetch("http://localhost:3000/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const json = await response.json()
    // handle response from server
    // errors should make sense to user or lock out bots
    if (json.error) {
      // handle error cases
      console.log(json.error)
      // console.log error codes and show user/bot verification failed.
    }
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <>
      <ContactForm
        state={{ name, setName, email, setEmail, message, setMessage }}
      >
        {!token ? (
          <VerifyButton handleVerify={handleVerify} />
        ) : (
          <SubmitButton handleSubmit={handleSubmit} />
        )}
      </ContactForm>
      {error && <p>{error}</p>}
    </>
  )
}
