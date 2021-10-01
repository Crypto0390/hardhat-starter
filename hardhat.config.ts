
import 'dotenv/config'
import { HardhatUserConfig } from 'hardhat/types'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
import '@typechain/hardhat'
import 'hardhat-abi-exporter'
import 'hardhat-deploy'
import "hardhat-gas-reporter"

// Private Keys
const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY || ''
const BSCSCAN_EXPLORER_API_KEY = process.env.BSCSCAN_EXPLORER_API_KEY || '' 
const ETHERSCAN_EXPLORER_API_KEY = process.env.ETHERSCAN_EXPLORER_API_KEY || '' 

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
        version: '0.8.0',
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