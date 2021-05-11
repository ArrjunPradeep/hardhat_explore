/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-waffle') 

const INFURA_URL = 'https://ropsten.infura.io/v3/';
const PRIVATE_KEY = '';

module.exports = {
  solidity: "0.8.0",
  // networks:{
  //   ropsten: {
  //     url:INFURA_URL,
  //     accounts:[`0x${PRIVATE_KEY}`]
  //   }
  // }
};
