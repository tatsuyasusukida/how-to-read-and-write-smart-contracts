import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { InstallSection } from '../components/install'
import { ConnectSection } from '../components/connect'
import { ReadSection } from '../components/read'
import { WriteSection } from '../components/write'

const Home: NextPage = () => {
  const [isInstalled, setIsInstalled] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    setIsInstalled(!!window.ethereum)
  }, [])

  const onConnect = (walletAddress) => {
    setIsConnected(!!walletAddress)
  }

  return (
    <div>
      <Head>
        <title>How to read and write smart contracts from a web page</title>
      </Head>
      <h1>How to read and write smart contracts from a web page</h1>
      {!isInstalled && (
        <InstallSection></InstallSection>
      )}
      {isInstalled && (
        <>
          <ConnectSection onConnect={onConnect}></ConnectSection>          
          {isConnected && (
            <>
              <ReadSection></ReadSection>
              <WriteSection></WriteSection>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Home
