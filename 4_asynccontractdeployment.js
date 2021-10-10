const Web3 = require("web3");
const rpcUrl = "https://ropsten.infura.io/v3/a905e1cb942d496186bb0bd6e63a9c38";
const web3 = new Web3(rpcUrl);
const Tx = require("ethereumjs-tx").Transaction;
const Account_1 = "0xa3Fc0E08b0f266dEBd9E344A9091a6b227a6137d";
const PrivateKey = "f1c8c5a8ce5525797c68f095229028a50fe9bbda208300b60d3ed8d0365e18b6";
const account_privatekey = Buffer.from(PrivateKey,'hex');
// const Account2 = "0x03BD60230e7233016aB6BBD968AFA91534A64125";
const ABICode  = "608060405234801561001057600080fd5b506101d5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063262a9dff146100465780636e424d5a14610064578063b3f2e47114610094575b600080fd5b61004e6100b2565b60405161005b919061015e565b60405180910390f35b61007e60048036038101906100799190610122565b6100b8565b60405161008b919061015e565b60405180910390f35b61009c610104565b6040516100a9919061015e565b60405180910390f35b60005481565b6000816000819055507f7c98c0e2606c57d1a96be4f06eaba615a10b2bea1669c382dce34a0bd64fad176000546040516100f2919061015e565b60405180910390a16000549050919050565b60008054905090565b60008135905061011c81610188565b92915050565b60006020828403121561013857610137610183565b5b60006101468482850161010d565b91505092915050565b61015881610179565b82525050565b6000602082019050610173600083018461014f565b92915050565b6000819050919050565b600080fd5b61019181610179565b811461019c57600080fd5b5056fea26469706673582212202e418dbe0191ac812b274435ade8beca2f645b8c23ec38b66a0dcc81f73cc03164736f6c63430008070033";
const BytecodeBuffer = Buffer.from(ABICode, "HEX");

// web3.eth.getTransactionCount(Account_1, (error, txCount) =>
const contractDeploymentAsync = async() =>{
    try{
        let txcount = await web3.eth.getTransactionCount(Account_1)
        const txObject = {
            nonce:    web3.utils.toHex(txcount),
            data: BytecodeBuffer,
            // value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
            gasLimit: web3.utils.toHex(500000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }
        // console.log(error);
    const tx = new Tx(txObject,{chain:'ropsten',hardfork:"petersburg" });
    tx.sign(account_privatekey);

    const serialize = tx.serialize();
    const txHex = '0x'+serialize.toString('HEX');
    let sendSignedTxn = await web3.eth.sendSignedTransaction(txHex);

    console.log("signed transaction", sendSignedTxn);
    }
    catch (error){
        // console.log(error);
    }
}
contractDeploymentAsync()