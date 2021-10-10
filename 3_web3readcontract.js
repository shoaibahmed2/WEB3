const Web3 = require("web3");
const rpcUrl = "https://ropsten.infura.io/v3/a905e1cb942d496186bb0bd6e63a9c38";
// const account = "0xa3Fc0E08b0f266dEBd9E344A9091a6b227a6137d";

const web3 = new Web3(rpcUrl);

const Abi = [
	{
		"inputs": [],
		"name": "retrieve",
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
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


const contractAddress= "0xC498678a3C8999bF0a0706548A6eF33346b5880B";
const contract = new web3.eth.Contract(Abi,contractAddress);

contract.methods.retrieve().call((err,result)=>{
	if(!err){
		console.log('result from contract', result);
	}

})