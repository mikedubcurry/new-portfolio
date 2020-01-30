import React, { useState } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

// create styles for form elements
// create error styles to alert if a field is empty
// display error text if exists

import ContactForm from "./ContactForm"

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

function VerifyButton({ handleVerify }) {
  return <button onClick={handleVerify}>Prove you're not a bot</button>
}

function SubmitButton({ handleSubmit }) {
  return <button onClick={handleSubmit}>Submit</button>
}
