// SPDX-License-Identifier: MIT
import { ethers } from 'hardhat';
import { Signer } from 'ethers';
import { expect } from 'chai';
import { BasicQuest__factory } from '../../typechain-types/factories/quests';

describe('BasicQuest', function () {
  let Quest: BasicQuest__factory;
  let basicQuest: any;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy the Quest contract
    Quest = await ethers.getContractFactory('BasicQuest');
    basicQuest = await Quest.deploy();
    await basicQuest.waitForDeployment();
  });

  it('should deploy BasicQuest contract', async function () {
    expect(basicQuest.target).to.not.be.undefined;
  });

  it('should mark quest as completed for any address', async function () {
    // Check if the quest is completed for an address
    const isCompleted = await basicQuest.isCompletedByAddress(addr1.getAddress());
    expect(isCompleted).to.be.true;
  });

  it('should allow claiming reward for completed quest', async function () {
    // Claim reward for addr1 (assuming the quest is completed)
    await basicQuest.connect(addr1).claimReward();

    // Check if addr1 has claimed the reward
    const isClaimed = await basicQuest.isClaimedByAddress(await addr1.getAddress());
    expect(isClaimed).to.be.true;
  });

  it('should not allow claiming reward more than once', async function () {
    // Claim reward for addr1
    await basicQuest.connect(addr1).claimReward();

    // Try to claim reward again for addr1
    await expect(basicQuest.connect(addr1).claimReward()).to.be.revertedWith('reward already claimed');
  });
});
