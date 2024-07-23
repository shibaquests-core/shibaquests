// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

// Import the IQuest interface
import "./BasicQuest.sol";


/**
 * @title ERC721Quest
 * @author 
 * @dev Quest that requires the user to own a certain number of ERC721 tokens
 */
contract ERC721Quest is BasicQuest {
  address public erc721Address;
  uint256 public minTokens;

  constructor(address _erc721Address, uint256 _minTokens) {
    erc721Address = _erc721Address;
    minTokens = _minTokens;
  }

  function isCompletedByAddress(address _addr) public view override returns (bool) {
    return IERC721(erc721Address).balanceOf(_addr) >= minTokens;
  }
}
