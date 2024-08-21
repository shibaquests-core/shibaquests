// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20Quest.sol";

contract ERC20QuestFactory {
    address[] public deployedContracts;

    event ContractDeployed(address indexed newContractAddress);

    function deployContract(address _erc20Address, uint256 _minTokens) public {
        address newContract = address(new ERC20Quest(_erc20Address, _minTokens));
        deployedContracts.push(newContract);
        emit ContractDeployed(newContract);
    }

    function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }
}
