const Web3 = require("web3");
const rpcUrl = "https://ropsten.infura.io/v3/a905e1cb942d496186bb0bd6e63a9c38";
const web3 = new Web3(rpcUrl);
const Tx = require("ethereumjs-tx").Transaction;
const Account_1 = "0xa3Fc0E08b0f266dEBd9E344A9091a6b227a6137d";
const PrivateKey = "f1c8c5a8ce5525797c68f095229028a50fe9bbda208300b60d3ed8d0365e18b6";
const account_privatekey = Buffer.from(PrivateKey,'hex');
const Account2 = "0x03BD60230e7233016aB6BBD968AFA91534A64125";

web3.eth.getTransactionCount(Account_1, (error, txCount) => {
    console.log("nounce value",txCount);
    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      to:       Account2,
      value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
      gasLimit: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }
    const tx = new Tx(txObject,{'chain':'ropsten'});
    tx.sign(account_privatekey);

    const serialize = tx.serialize();
    const txHex = '0x'+serialize.toString('HEX');
    web3.eth.sendSignedTransaction(txHex, (error, txHash)=> {
        if(!error){
            console.log("txn successfull",txHash);
        }else{
            console.log("transaction error:", error);
        }
    }); 
  })
