import { useContractConfig } from './hooks/useContractConfig'

/*import {
    useBalance,
    useContractLoader,
    useContractReader,
    useGasPrice,
    useOnBlock,
    useUserProviderAndSigner,
} from "eth-hooks";*/

import useContractLoader from "eth-hooks";

// Require the Web3 Module
var Web3 = require('web3');

const { ethers } = require("ethers");

// Show Web3 where it needs to look for the Ethereum node
var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

const localChainId = 31337;

const localProvider = new ethers.providers.StaticJsonRpcProvider('http://127.0.0.1:8545');

var fromAddr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

var toAddr = "0x6f713ab1c2B2E7b3a7787B7F1e33c545cF9eCc36";

var contractYourCollectibleAddr = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

var ipfsHash = "Qme9T6kxqGE13fFLMN7o1gPXnojgktmDPENDphkHf5gMsn";

const contractConfig = useContractConfig();

// Load in your local 📝 contract and read a value from it:
const readContracts = useContractLoader(localProvider, contractConfig);
