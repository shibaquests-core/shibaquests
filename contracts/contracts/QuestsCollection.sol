// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IQuest.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";


contract QuestsCollection {
    // Array to store the addresses of the Quest contracts
    address[] public quests;
    address public owner;
    string public metadata;

    // Event emitted when a new quest is added
    event QuestAdded(address indexed questAddress);

    // Event emitted when a quest is removed
    event QuestRemoved(address indexed questAddress);

    // Event emitted when a quest is edited
    event QuestEdited(address indexed oldQuestAddress, address indexed newQuestAddress);

    // Modifier to restrict function calls to the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    constructor(address _owner, string memory _metadata) {
        // Set the owner to the address that deploys the contract
        owner = _owner;
        metadata = _metadata;
    }

    function setQuests(address[] memory _quests, string memory _metadata) public onlyOwner {
        quests = _quests;
        metadata = _metadata;
    }

    // Function to get the total number of quests
    function getQuestsCount() public view returns (uint) {
        return quests.length;
    }

    // Function to get a quest address by index
    function getQuest(uint _index) public view returns (address) {
        require(_index < quests.length, "Index out of bounds.");
        return quests[_index];
    }
}
