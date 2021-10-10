const Web3 = require("web3");
const rpcUrl = "https://ropsten.infura.io/v3/a905e1cb942d496186bb0bd6e63a9c38";
const web3 = new Web3(rpcUrl);
const contractaddress = "0x5Fc7e2A0af72D972F5e3EDB94061cDB0748c408F";
const contractABI = [
    [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "ageCaller",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "age",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getage",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_age",
                    "type": "uint256"
                }
            ],
            "name": "setage",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
] 

const getLstestblock = async() => {
    try{
        const blockNumber = await web3.eth.getBlock("latest");
        console.log("lastest block :", blockNumber);


    } catch (error){
        console.log("error:", error);
    }
}
getLstestblock();