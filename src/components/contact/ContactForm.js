import React from "react"

export default function ContactForm({ state }) {
  let { name, setName, email, setEmail, message, setMessage } = state

  return (
    <form>
      <fieldset>
        <label htmlFor="name">
          Name:
          <input
            autoComplete="off"
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br/>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            autoComplete="off"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <br/>
        <label htmlFor='message'>Message: 
          <textarea id='message' autoComplete='off' rows='5' value={message} onChange={e => setMessage(e.target.value)} />
        </label>
      </fieldset>
    </form>
  )
}
