
// -- Step 1: Set up the configuration
var web3 = require('web3');
var web3 = new web3('HTTP://127.0.0.1:9545');

web3.eth.getTransactionCount('0x6B6F06395fC9F6396A8a4906F3BA1b7aA054E306').then(console.log);