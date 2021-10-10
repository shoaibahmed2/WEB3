const Web3 = require("web3");
const rpcUrl = "https://ropsten.infura.io/v3/a905e1cb942d496186bb0bd6e63a9c38";
const account = "0xa3Fc0E08b0f266dEBd9E344A9091a6b227a6137d";

const web3 = new Web3(rpcUrl);

// web3.eth.getBalance(account, (err, wei) => {
//     console.log("balance in wei",wei);
//     balance = web3.utils.fromWei(wei, "ether");
//     console.log("balance in ether", balance);


// })
const getBalanceAsync = async()=>{
    try{
        const wei = await web3.eth.getBalance(account);
        console.log("balance in wei",wei);
        balance = web3.utils.fromWei(wei, "ether");
        console.log("balance in ether", balance);
    } catch(err){
        console.log('Error', err);
    }
}

getBalanceAsync();