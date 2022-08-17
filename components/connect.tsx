import { useEffect, useState } from "react"

export function ConnectSection ({onConnect}) {
  const [address, setAddress] = useState('')

  const onAccountsChanged = ([walletAddress]) => {
    setAddress(walletAddress || '')
    onConnect && onConnect(walletAddress)
  }

  useEffect(() => {
    (async () => {
      if (window.ethereum) {
        const method = 'eth_accounts'
        const walletAddresses = await window.ethereum.request({method})

        onAccountsChanged(walletAddresses)
      }
    })()
  }, [])

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', onAccountsChanged)

      return () => {
        window.ethereum.removeListener('accountsChanged', onAccountsChanged)
      }
    }
  })

  const onClickConnect = async () => {
    const method = 'eth_requestAccounts'
    const walletAddresses = await window.ethereum.request({method})

    onAccountsChanged(walletAddresses)
  }

  return (
    <section>
      <h2>Connect</h2>
      <button onClick={onClickConnect}>Connect</button>
      <dl>
        <dt>Wallet address</dt>
        <dd>{address}</dd>
      </dl>
    </section>
  )
}
