// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./QuestsCollection.sol";

contract QuestsCollectionFactory {
    address[] public deployedContracts;

    event ContractDeployed(address indexed newContractAddress);

    function deployContract() public {
        address newContract = address(new QuestsCollection());
        deployedContracts.push(newContract);
        emit ContractDeployed(newContract);
    }

    function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }
}
