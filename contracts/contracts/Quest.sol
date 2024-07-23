// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

// Import the IQuest interface
import "./interfaces/IQuest.sol";

abstract contract Quest is IQuest, ERC165 {
  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
    return interfaceId == type(IQuest).interfaceId || super.supportsInterface(interfaceId);
  }
}
