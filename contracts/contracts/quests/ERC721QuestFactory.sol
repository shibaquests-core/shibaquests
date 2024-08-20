// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721Quest.sol";

contract ERC721QuestFactory {
    address[] public deployedContracts;

    event ContractDeployed(address indexed newContractAddress);

    function deployContract(address _erc721Address, uint256 _minTokens) public {
        address newContract = address(new ERC721Quest(_erc721Address, _minTokens));
        deployedContracts.push(newContract);
        emit ContractDeployed(newContract);
    }

    function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }
}
