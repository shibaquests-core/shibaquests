import dotenv from 'dotenv';
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-abi-exporter';

const config: HardhatUserConfig = {
  solidity: "0.8.1",
  abiExporter: {
    path: '../webapp/src/abi',
    flat: true,
  },
  networks: {
    puppynet: {
      url: process.env.PUPPYNET_URL,
      accounts: [process.env.PUPPYNET_PRIVATE_KEY as string],
      chainId: 157,
    },
  },
};

export default config;
