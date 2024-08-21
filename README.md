![GitHub issues](https://img.shields.io/github/issues/shibaquests-core/shibaquests)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/shibaquests-core/shibaquests/main)


# ShibaQuests 

## Quick Links
- [📹 Video Presentation](https://www.youtube.com/watch?v=pgCP3Uy1niM)
- [⚡️ Live Demo](https://shibaquests.xyz)

## About the project

### Overview
ShibaQuests is an innovative platform designed to empower communities within the Web3 ecosystem by allowing them to create, manage, and participate in quests.

Developed during the 2024 ETHToronto & ETHWomen hackathon, ShibaQuests leverages the power of Smart Contracts on Shibarium Network to enable users to craft interactive challenges that can be completed either on-chain or off-chain.

The platform aims to serve as a dynamic tool for engaging users across a variety of Web3 applications, games, and more.

### Key Features
- **Quest Creation**: ShibaQuests provides users with the ability to create customizable quests through a user-friendly interface. These quests can range from simple tasks to complex challenges, tailored to the specific needs of the community. Each quest is governed by a Smart Contract, ensuring transparency, security, and immutability.
  
- **Quests Collection**: A unique feature of ShibaQuests is the Quests Collection, which allows users to group multiple quests into a collection. This feature is ideal for Web3 developers, game designers, and community leaders who want to create a series of interconnected challenges. The Quests Collection can be used to drive engagement, reward participation, and build community loyalty.
  
- **Web3 Integration**: The platform is fully integrated with Web3, making it easy for users to connect their wallets and participate in quests. Developers can also integrate ShibaQuests into their existing Web3 applications or games, using it as a tool to enhance user engagement and interaction.
  
- **Community Engagement**: ShibaQuests is designed with community building in mind. By enabling users to create and participate in quests, the platform fosters a sense of collaboration and achievement within the community. It also offers opportunities for communities to reward their members with tokens, NFTs, or other blockchain-based assets.

## Why ShibaQuests?
ShibaQuests addresses the growing need for interactive and engaging content within the Web3 ecosystem. As blockchain technology and decentralized applications (dApps) continue to evolve, keeping users engaged has become a critical challenge. ShibaQuests provides a solution by offering a platform that not only entertains but also incentivizes participation through rewarding mechanisms.


## The IQuest interface

In order to have a custom Quest contract, it must implement the `IQuest` interface. This interface defines the following functions:

```solidity
interface IQuest is IERC165 {
    function isCompletedByAddress(address) external view returns (bool);
    function isClaimedByAddress(address) external view returns (bool);
    function claimReward() external;
}
```

## Quickstart

### Contract

1. Go to the `contracts` folder and install the dependencies:

```bash
cd contracts
npm i
```

2. Start the Hardhat node:

```bash
npm run node
```

3. Build & Deploy the Factory Contract

```bash
npm run build
npm run deploy --localhost
```

### WebApp

1. Go to the `webapp` folder and install the dependencies:

```bash
cd webapp
npm i
```

2. Generate the Typescript types for the Contract:

```bash
npm run gen
```

3. Update the `VITE_FACTORY_ADDRESS` in the `.env` file with the Factory Contract address:

```bash
VITE_FACTORY_ADDRESS=<YOUR_DEPLOYED_FACTORY_CONTRACT_ADDRESS>
```

4. Start the WebApp:

```bash
npm run dev
```
