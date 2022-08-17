import { ethers } from "ethers"
import { abi } from "./abi"

export function createContract () {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, abi, signer)

  return contract
}
