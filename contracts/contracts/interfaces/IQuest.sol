// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";


// Interface for the Quest contract

interface IQuest is IERC165 {
    function isCompletedByAddress(address) external view returns (bool);
    function isClaimedByAddress(address) external view returns (bool);
    function claimReward() external;
}
