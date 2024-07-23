// SPDX-License-Identifier: MIT
import { ethers } from 'hardhat';
import { Signer } from 'ethers';
import { expect } from 'chai';
import { ERC721Demo__factory, ERC721Quest__factory } from '../../typechain-types';

describe('ERC721 Quests', function () {
  let ERC721DemoFactory: ERC721Demo__factory;
  let ERC721QuestFactory: ERC721Quest__factory;
  let erc721: any;
  let quest: any;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy the ERC721 contract
    ERC721DemoFactory = await ethers.getContractFactory('ERC721Demo');
    ERC721QuestFactory = await ethers.getContractFactory('ERC721Quest');
    erc721 = await ERC721DemoFactory.deploy();
    await erc721.waitForDeployment();
    quest = await ERC721QuestFactory.deploy(erc721.target, 2); // 2 tokens required to complete the quest
    await quest.waitForDeployment();
  });

  it('should deploy BasicQuest contract', async function () {
    expect(quest.target).to.not.be.undefined;
  });

  it('the quest should be incomplete when user doesnt have at least 2 tokens', async function () {
    // Check if the quest is completed for an address
    const isCompleted = await quest.connect(addr1).isCompletedByAddress(addr1.getAddress());
    expect(isCompleted).to.be.false;
  });

  it('should mark quest as completed when the user has 2 or more tokens', async function () {
    // Mint 2 tokens for addr1
    await erc721.connect(addr1).mint(await addr1.getAddress());
    await erc721.connect(addr1).mint(await addr1.getAddress());

    // Check if the quest is completed for an address
    const isCompleted = await quest.connect(addr1).isCompletedByAddress(addr1.getAddress());
    expect(isCompleted).to.be.true;
    expect(await quest.connect(addr1).isClaimedByAddress(await addr1.getAddress())).to.be.false;

    // Claim reward for addr1
    await quest.connect(addr1).claimReward();

    // Check if addr1 has claimed the reward
    expect(await quest.connect(addr1).isClaimedByAddress(await addr1.getAddress())).to.be.true;
  });
});
