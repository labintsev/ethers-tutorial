import { ethers } from "ethers";
import './App.css'

// case 1 - block with cors error
// const providerUrl = 'https://sepolia-eth.web3gate.ru/18dc5b64-a810-4bd0-80dc-ffa4657b168e';
// const provider = new ethers.JsonRpcProvider(providerUrl);

// case 2 - works fine
const provider = new ethers.JsonRpcProvider("https://shape-mainnet.g.alchemy.com/v2/5gSTs0ulBGLemVyCcVRXT0FR_aM-Rwyq");
 
const network = await provider.getNetwork();
  
function App() {
  console.log(network);
  return (
    <>
    </>
  )
}

export default App
