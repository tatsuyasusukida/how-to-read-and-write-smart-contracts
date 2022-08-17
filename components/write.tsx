import { useState } from "react"
import { createContract } from "../lib/create-contract"

export function WriteSection () {
  const [message, setMessage] = useState('Hello World!')
  const [transaction, setTransaction] = useState('')

  const onClickWrite = async (event: any) => {
    event.preventDefault()

    const contract = createContract()
    const {hash} = await contract.setMessage(message)

    setTransaction(`https://goerli.etherscan.io/tx/${hash}`)
  }

  const onChangeMessage = (event: any) => {
    setMessage(event.target.value)
  }

  return (
    <section>
      <h2>Write</h2>
      <form>
        <input type="text" name="message" id="message" value={message} onChange={onChangeMessage} />
        <button type="submit" onClick={onClickWrite}>Write</button>
      </form>
      <dl>
        <dt>Transaction</dt>
        <dd>
          <a href={transaction} target="_blank">{transaction}</a>
        </dd>
      </dl>
    </section>
  )
}