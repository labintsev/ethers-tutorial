const axios = require("axios");

const url = `https://sepolia-eth.web3gate.ru/{api_key}`;

const payload = {
  jsonrpc: '2.0',
  id: 1,
  method: 'eth_blockNumber',
  params: []
};

axios.post(url, payload)
  .then(response => {
    console.log('The latest block number is', parseInt(response.data.result, 16));
  })
  .catch(error => {
    console.error(error);
  });
