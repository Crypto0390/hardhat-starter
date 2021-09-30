
require('dotenv').config()
import { task } from 'hardhat/config'
import { HardhatUserConfig } from 'hardhat/types'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import 'hardhat-abi-exporter'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import 'hardhat-gas-reporter'
import '@typechain/hardhat'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
 
// Private Keys
const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY || ''
const BSCSCAN_EXPLORER_API_KEY = process.env.BSCSCAN_EXPLORER_API_KEY || '' 

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [
      {
        version: '0.8.7',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  networks: {
    hardhat: {},
    bsctestnet:{
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      chainId: 97,
      accounts: [SIGNER_PRIVATE_KEY],
    },
    bscmainnet:{
      url: 'https://bsc-dataseed.binance.org',
      chainId: 56,
      accounts: [SIGNER_PRIVATE_KEY],
    },
  },
  namedAccounts:{
    deployer: 0,
  },
  etherscan: {
    apiKey: BSCSCAN_EXPLORER_API_KEY,
  },
}

export default config