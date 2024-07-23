import { expect } from "chai";
import { ethers } from "hardhat";
import { QuestsCollection } from "../typechain-types";

describe("QuestsCollection", function () {
  let questsCollection: QuestsCollection;
  let owner: any;
  let addr1: any;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const QuestsCollection = await ethers.getContractFactory("QuestsCollection", owner);
    questsCollection = await QuestsCollection.deploy();
    await questsCollection.waitForDeployment();
  });

  it("Should add a new quest", async function () {
    const Quest = await ethers.getContractFactory("BasicQuest", owner);
    const quest = await Quest.deploy();
    await quest.waitForDeployment();

    await questsCollection.addQuest(quest.target);

    expect(await questsCollection.getQuestsCount()).to.equal(1);
    expect(await questsCollection.getQuest(0)).to.equal(quest.target);
  });

  it("Should remove a quest", async function () {
    const Quest = await ethers.getContractFactory("BasicQuest", owner);
    const quest1 = await Quest.deploy();
    const quest2 = await Quest.deploy();
    await quest1.waitForDeployment();
    await quest2.waitForDeployment();

    await questsCollection.addQuest(quest1.target);
    await questsCollection.addQuest(quest2.target);

    await questsCollection.removeQuest(0);

    expect(await questsCollection.getQuestsCount()).to.equal(1);
    expect(await questsCollection.getQuest(0)).to.equal(quest2.target);
  });

  it("Should edit a quest", async function () {
    const Quest = await ethers.getContractFactory("BasicQuest", owner);
    const quest1 = await Quest.deploy();
    const quest2 = await Quest.deploy();
    await quest1.waitForDeployment();
    await quest2.waitForDeployment();

    await questsCollection.addQuest(quest1.target);

    await questsCollection.editQuest(0, quest2.target);

    expect(await questsCollection.getQuest(0)).to.equal(quest2.target);
  });

  it("Should revert when a non-owner tries to add a quest", async function () {
    const Quest = await ethers.getContractFactory("BasicQuest", addr1);
    const quest = await Quest.deploy();
    await quest.waitForDeployment();

    await expect(questsCollection.connect(addr1).addQuest(quest.target)).to.be.revertedWith("Only the owner can call this function.");
  });

  it("Should revert when a non-owner tries to remove a quest", async function () {
    await expect(questsCollection.connect(addr1).removeQuest(0)).to.be.revertedWith("Only the owner can call this function.");
  });

  it("Should revert when a non-owner tries to edit a quest", async function () {
    const Quest = await ethers.getContractFactory("BasicQuest", owner);
    const quest = await Quest.deploy();
    await quest.waitForDeployment();

    await questsCollection.addQuest(quest.target);

    await expect(questsCollection.connect(addr1).editQuest(0, quest.target)).to.be.revertedWith("Only the owner can call this function.");
  });
});
