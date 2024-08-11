import { ethers } from "hardhat";
import { QuestsCollection } from '../typechain-types/contracts/QuestsCollection';

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const QuestsCollectionFactory = await ethers.getContractFactory("QuestsCollectionFactory");
  const questsCollectionFactory = await QuestsCollectionFactory.deploy();
  await questsCollectionFactory.waitForDeployment();

  // console.log(contract);

  // const res = await contract.waitForDeployment();
  // console.log(res);

  console.log(
    `SomeExampleFactory deployed to ${await questsCollectionFactory.getAddress()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
