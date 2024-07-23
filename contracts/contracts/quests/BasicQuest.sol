// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

// Import the IQuest interface
import "../Quest.sol";

contract BasicQuest is Quest {
  // Add a map of addresses to booleans to store the completion status of each address
  mapping(address => bool) public claimedByAddress;

  // Add a function to check if an address has completed the quest
  function isCompletedByAddress(address) public view virtual override returns (bool) {
    // The BasicQuest contract assumes that the quest is always completed for every address
    return true;
  }

  // Add a function to check if an address has claimed the reward
  function isClaimedByAddress(address _address) public virtual view override returns (bool) {
    return claimedByAddress[_address];
  }

  // Add a function to allow an address to claim a reward
  function claimReward() public virtual override {
    require(isCompletedByAddress(msg.sender), "quest not completed");
    require(!isClaimedByAddress(msg.sender), "reward already claimed");
    claimedByAddress[msg.sender] = true;
  }
}
