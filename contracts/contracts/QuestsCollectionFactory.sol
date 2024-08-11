// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./QuestsCollection.sol";

contract QuestsCollectionFactory {
    address[] public deployedContracts;

    event ContractDeployed(address indexed newContractAddress);

    function deployContract(string memory _metadata) public {
        address newContract = address(new QuestsCollection(_metadata));
        deployedContracts.push(newContract);
        emit ContractDeployed(newContract);
    }

    function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }
}
