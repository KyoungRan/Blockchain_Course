/*#########################
##     CONFIGURATION     ##
#########################*/

// Step 1: Set up the appropriate configuration
var Web3 = require('web3');
var EthereumTransaction = require('ethereumjs-tx');
var web3 = new Web3('HTTP://127.0.0.1:9545');

// Step 2: Set the sending and receving addresses for the transaction.
var sendingAddress = '0x6B6F06395fC9F6396A8a4906F3BA1b7aA054E306';
var receivingAddress = '0x07173a2Adc062df694C2E446c7756144B9B674Bc';

// Step 3: Check the balances of each address
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

/*#########################
## CREATE A TRANSACTION  ##
#########################*/

// Step 4: Set up the transaction using the transaction variables as shown
var rawTransaction = {
  nonce: 1,
  to: receivingAddress,
  gasPrice: 20000000,
  gasLimit: 30000,
  value: 100,
  data: ""
};

// Step 5: View the raw transaction rawTransation

// Step 6: Check the new account balances (they should be the same)
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

// Note: They haven't changed bacause they need to be signed...

/*#########################
## Sign the Transaction  ##
#########################*/

// Step 7: Sign the transaction with the Hex value of the private key of the sender
var privateKeySender = 'b13453d4f2ac0ee85997f81285608545e512927cc6439992916430f5cc1e4cbe';
var privateKeySenderHex = new Buffer(privateKeySender, 'hex');
var transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

/*########################################
## Send the transaction to the network  ##
########################################*/

// Step 8: Send the serialized signed transaction to the Ethereum network.
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);
