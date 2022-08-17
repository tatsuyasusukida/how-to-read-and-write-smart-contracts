import { useState } from "react"
import { createContract } from "../lib/create-contract"

export function ReadSection () {
  const [message, setMessage] = useState(null)

  const onClickRead = async () => {
    const contract = createContract()
    const message = await contract.message()

    setMessage(message)
  }

  return (
    <section>
      <h2>Read</h2>
      <button onClick={onClickRead}>Read</button>
      <dl>
        <dt>Message</dt>
        <dd>{message}</dd>
      </dl>
    </section>
  )
}
