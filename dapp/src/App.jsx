import { ethers } from "ethers";


import './App.css'
import BalanceReader from "./BalanceReader";
import Transfer from "./Transfer";
import BlockExplorer from "./BlockExplorer";
import VendingMachine from "./VendingMachine";

const providerUrl = 'http://192.168.1.206';
const provider = new ethers.JsonRpcProvider(providerUrl);
const network = await provider.getNetwork();
console.log(network);


function App() {

  return (
    <>
      {/* <BalanceReader
        provider={provider}
      />
      <BlockExplorer
        provider={provider}
      /> */}
      <VendingMachine
        provider={provider}
      />
    </>
  )
}

export default App
