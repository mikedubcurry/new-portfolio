import React, { useState } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

export default function Message() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleVerify = async () => {
    if (!executeRecaptcha) {
      console.log("ReCaptcha is not working")
      return
    }
    const result = await executeRecaptcha("contact")

    setToken(result)
  }

  const handleSubmit = async () => {
    const body = { name, email, message, token }

    const response = await fetch("http://localhost:3000/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const json = await response.json()
    console.log(json)
  }

  return (
    <>
      {!token ? (
        <VerifyButton handleVerify={handleVerify} />
      ) : (
        <SubmitButton handleSubmit={handleSubmit} />
      )}
    </>
  )
}

function VerifyButton({ handleVerify }) {
  return <button onClick={handleVerify}>Prove you're not a bot</button>
}

function SubmitButton({ handleSubmit }) {
  return <button>Submit</button>
}
