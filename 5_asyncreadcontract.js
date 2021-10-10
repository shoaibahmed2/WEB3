const Web3 = require("web3");
const rpcUrl = "https://ropsten.infura.io/v3/a905e1cb942d496186bb0bd6e63a9c38";
const web3 = new Web3(rpcUrl);
// const Tx = require("ethereumjs-tx").Transaction;
// const Account_1 = "0xa3Fc0E08b0f266dEBd9E344A9091a6b227a6137d";
// const PrivateKey = "f1c8c5a8ce5525797c68f095229028a50fe9bbda208300b60d3ed8d0365e18b6";
// const account_privatekey = Buffer.from(PrivateKey,'hex'); 
const contractaddress = "0x327d29e899f3e334e377753f3beb4fc0f0d180ff";



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
const contractReadAsync = async() =>{
    try{
         const contractOne = new web3.eth.Contract(contractABI, contractaddress);
         let getage = await contractOne.methods.getAge().call();
         console.log("get age", getage);
    }
    catch (error){
         console.log(error);
    }
}
contractReadAsync()