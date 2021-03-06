import React, { useState } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import styled from "styled-components"

import ContactForm from "./ContactForm"

const FormButton = styled.button`
  width: 80%;
  align-self: center;
  margin-top: 2rem;
  border-radius: 10px;
  border: none;
  padding: 0.5rem 1rem 0, 5rem 1rem;
  transition: all 0.2s;
  color: #333;
  font-family: sans serif;
  font-size: 0.9rem;
  height: 10%;
  font-weight: bold;

  &:hover {
    letter-spacing: 1px;
  }

  &:active {
    letter-spacing: 0px;
  }
`

const Submit = styled(FormButton)`
  background: #75d0aa;

  &:hover {
    background: lightblue;
  }
  &:focus {
    outline: none;
    border: solid 2px #44b;
    border-radius: 8px;
  }
`

const Verify = styled(FormButton)`
  background: darkorange;
  font-size: 0.8rem;

  &:hover {
    background: orange;
  }
  &:focus {
    outline: none;
    border: solid 2px #44b;
    border-radius: 8px;
  }
`

const VerifyButton = ({ handleVerify }) => (
  <Verify onClick={handleVerify}>Click here if Human</Verify>
)

const SubmitButton = ({ handleSubmit }) => (
  <Submit onClick={handleSubmit}>Submit</Submit>
)

export default function Message() {
  const [token, setToken] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [errors, setErrors] = useState("")

  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleVerify = async e => {
    e.preventDefault()

    if (!executeRecaptcha) {
      setErrors({ message: "ReCaptcha is not working in your browser." })
      return
    }
    try {
      const result = await executeRecaptcha("contact")
      setToken(result)
    } catch (e) {
      setErrors(e)
      console.log(e)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const body = { name, email, message, token }

    if (!name) {
      setErrors({ message: "Please enter your name.", input: "name" })
      return
    }

    if (!email) {
      setErrors({ message: "Please enter your email.", input: "email" })
      return
    }

    if (!message) {
      setErrors({ message: "Please enter a message.", input: "message" })
      return
    }

    try {
      const response = await fetch("https://www.mcurry.xyz/contact", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })

      const json = await response.json()

      if (json.error) {
        console.log(json.error, json.err)
        setErrors({ message: json.error.message, error: json.error.err })
        return
      }
      setName("")
      setEmail("")
      setMessage("")
      setDisabled(true)
    } catch (e) {
      setErrors({ message: "Contact form is out of order." })
    }
  }

  return (
    <>
      {disabled ? (
        "Thank you"
      ) : (
        <ContactForm
          state={{ name, setName, email, setEmail, message, setMessage }}
          err={errors}
        >
          {errors && <p>{errors.message}</p>}
          {!token ? (
            <VerifyButton handleVerify={handleVerify} />
          ) : (
            <SubmitButton handleSubmit={handleSubmit} />
          )}
        </ContactForm>
      )}
    </>
  )
}
