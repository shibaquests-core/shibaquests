// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// Import the IQuest interface
import "./BasicQuest.sol";


/**
 * @title ERC20Quest
 * @author 
 * @dev Quest that requires the user to own a certain number of ERC20 tokens
 */
contract ERC20Quest is BasicQuest {
  address public erc20Address;
  uint256 public minTokens;

  constructor(address _erc20Address, uint256 _minTokens) {
    erc20Address = _erc20Address;
    minTokens = _minTokens;
  }

  function isCompletedByAddress(address _addr) public view override returns (bool) {
    return IERC20(erc20Address).balanceOf(_addr) >= minTokens;
  }
}
