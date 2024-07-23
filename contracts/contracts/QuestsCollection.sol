// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interfaces/IQuest.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";


contract QuestsCollection {
    // Array to store the addresses of the Quest contracts
    address[] public quests;
    address public owner;

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

    constructor() {
        // Set the owner to the address that deploys the contract
        owner = msg.sender;
    }

    // Function to add a new quest to the collection
    function addQuest(address _quest) public onlyOwner {
        require(_quest != address(0), "Invalid quest address.");
        require(ERC165(_quest).supportsInterface(type(IQuest).interfaceId), "Quest must implement IQuest interface.");
        quests.push(_quest);
        emit QuestAdded(_quest);
    }

    // Function to remove a quest from the collection
    function removeQuest(uint _index) public onlyOwner {
        require(_index < quests.length, "Index out of bounds.");
        address questAddress = quests[_index];

        // Move the last element to the deleted spot to maintain array continuity
        quests[_index] = quests[quests.length - 1];
        quests.pop();

        emit QuestRemoved(questAddress);
    }

    // Function to edit an existing quest in the collection
    function editQuest(uint _index, address _newQuest) public onlyOwner {
        require(_index < quests.length, "Index out of bounds.");
        require(_newQuest != address(0), "Invalid new quest address.");
        address oldQuestAddress = quests[_index];
        quests[_index] = _newQuest;

        emit QuestEdited(oldQuestAddress, _newQuest);
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
