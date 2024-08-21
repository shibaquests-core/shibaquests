import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BasicQuestFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const basicQuestFactoryAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newContractAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ContractDeployed',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deployContract',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'deployedContracts',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDeployedContracts',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20QuestFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20QuestFactoryAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newContractAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ContractDeployed',
  },
  {
    type: 'function',
    inputs: [
      { name: '_erc20Address', internalType: 'address', type: 'address' },
      { name: '_minTokens', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deployContract',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'deployedContracts',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDeployedContracts',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721QuestFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721QuestFactoryAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newContractAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ContractDeployed',
  },
  {
    type: 'function',
    inputs: [
      { name: '_erc721Address', internalType: 'address', type: 'address' },
      { name: '_minTokens', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deployContract',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'deployedContracts',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDeployedContracts',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'claimReward',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'isClaimedByAddress',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'isCompletedByAddress',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QuestsCollection
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const questsCollectionAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_metadata', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'questAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'QuestAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldQuestAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newQuestAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'QuestEdited',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'questAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'QuestRemoved',
  },
  {
    type: 'function',
    inputs: [{ name: '_index', internalType: 'uint256', type: 'uint256' }],
    name: 'getQuest',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getQuestsCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'metadata',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'quests',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_quests', internalType: 'address[]', type: 'address[]' },
      { name: '_metadata', internalType: 'string', type: 'string' },
    ],
    name: 'setQuests',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QuestsCollectionFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const questsCollectionFactoryAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newContractAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ContractDeployed',
  },
  {
    type: 'function',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
    name: 'deployContract',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'deployedContracts',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDeployedContracts',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link basicQuestFactoryAbi}__
 */
export const useReadBasicQuestFactory = /*#__PURE__*/ createUseReadContract({
  abi: basicQuestFactoryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link basicQuestFactoryAbi}__ and `functionName` set to `"deployedContracts"`
 */
export const useReadBasicQuestFactoryDeployedContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: basicQuestFactoryAbi,
    functionName: 'deployedContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link basicQuestFactoryAbi}__ and `functionName` set to `"getDeployedContracts"`
 */
export const useReadBasicQuestFactoryGetDeployedContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: basicQuestFactoryAbi,
    functionName: 'getDeployedContracts',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link basicQuestFactoryAbi}__
 */
export const useWriteBasicQuestFactory = /*#__PURE__*/ createUseWriteContract({
  abi: basicQuestFactoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link basicQuestFactoryAbi}__ and `functionName` set to `"deployContract"`
 */
export const useWriteBasicQuestFactoryDeployContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: basicQuestFactoryAbi,
    functionName: 'deployContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link basicQuestFactoryAbi}__
 */
export const useSimulateBasicQuestFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: basicQuestFactoryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link basicQuestFactoryAbi}__ and `functionName` set to `"deployContract"`
 */
export const useSimulateBasicQuestFactoryDeployContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: basicQuestFactoryAbi,
    functionName: 'deployContract',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link basicQuestFactoryAbi}__
 */
export const useWatchBasicQuestFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: basicQuestFactoryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link basicQuestFactoryAbi}__ and `eventName` set to `"ContractDeployed"`
 */
export const useWatchBasicQuestFactoryContractDeployedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: basicQuestFactoryAbi,
    eventName: 'ContractDeployed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20QuestFactoryAbi}__
 */
export const useReadErc20QuestFactory = /*#__PURE__*/ createUseReadContract({
  abi: erc20QuestFactoryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20QuestFactoryAbi}__ and `functionName` set to `"deployedContracts"`
 */
export const useReadErc20QuestFactoryDeployedContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20QuestFactoryAbi,
    functionName: 'deployedContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20QuestFactoryAbi}__ and `functionName` set to `"getDeployedContracts"`
 */
export const useReadErc20QuestFactoryGetDeployedContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20QuestFactoryAbi,
    functionName: 'getDeployedContracts',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20QuestFactoryAbi}__
 */
export const useWriteErc20QuestFactory = /*#__PURE__*/ createUseWriteContract({
  abi: erc20QuestFactoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20QuestFactoryAbi}__ and `functionName` set to `"deployContract"`
 */
export const useWriteErc20QuestFactoryDeployContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20QuestFactoryAbi,
    functionName: 'deployContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20QuestFactoryAbi}__
 */
export const useSimulateErc20QuestFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: erc20QuestFactoryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20QuestFactoryAbi}__ and `functionName` set to `"deployContract"`
 */
export const useSimulateErc20QuestFactoryDeployContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20QuestFactoryAbi,
    functionName: 'deployContract',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20QuestFactoryAbi}__
 */
export const useWatchErc20QuestFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc20QuestFactoryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20QuestFactoryAbi}__ and `eventName` set to `"ContractDeployed"`
 */
export const useWatchErc20QuestFactoryContractDeployedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20QuestFactoryAbi,
    eventName: 'ContractDeployed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721QuestFactoryAbi}__
 */
export const useReadErc721QuestFactory = /*#__PURE__*/ createUseReadContract({
  abi: erc721QuestFactoryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721QuestFactoryAbi}__ and `functionName` set to `"deployedContracts"`
 */
export const useReadErc721QuestFactoryDeployedContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721QuestFactoryAbi,
    functionName: 'deployedContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721QuestFactoryAbi}__ and `functionName` set to `"getDeployedContracts"`
 */
export const useReadErc721QuestFactoryGetDeployedContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721QuestFactoryAbi,
    functionName: 'getDeployedContracts',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721QuestFactoryAbi}__
 */
export const useWriteErc721QuestFactory = /*#__PURE__*/ createUseWriteContract({
  abi: erc721QuestFactoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721QuestFactoryAbi}__ and `functionName` set to `"deployContract"`
 */
export const useWriteErc721QuestFactoryDeployContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721QuestFactoryAbi,
    functionName: 'deployContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721QuestFactoryAbi}__
 */
export const useSimulateErc721QuestFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: erc721QuestFactoryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721QuestFactoryAbi}__ and `functionName` set to `"deployContract"`
 */
export const useSimulateErc721QuestFactoryDeployContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721QuestFactoryAbi,
    functionName: 'deployContract',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721QuestFactoryAbi}__
 */
export const useWatchErc721QuestFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc721QuestFactoryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721QuestFactoryAbi}__ and `eventName` set to `"ContractDeployed"`
 */
export const useWatchErc721QuestFactoryContractDeployedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721QuestFactoryAbi,
    eventName: 'ContractDeployed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestAbi}__
 */
export const useReadIQuest = /*#__PURE__*/ createUseReadContract({
  abi: iQuestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestAbi}__ and `functionName` set to `"isClaimedByAddress"`
 */
export const useReadIQuestIsClaimedByAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: iQuestAbi,
    functionName: 'isClaimedByAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestAbi}__ and `functionName` set to `"isCompletedByAddress"`
 */
export const useReadIQuestIsCompletedByAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: iQuestAbi,
    functionName: 'isCompletedByAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIQuestSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: iQuestAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestAbi}__
 */
export const useWriteIQuest = /*#__PURE__*/ createUseWriteContract({
  abi: iQuestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestAbi}__ and `functionName` set to `"claimReward"`
 */
export const useWriteIQuestClaimReward = /*#__PURE__*/ createUseWriteContract({
  abi: iQuestAbi,
  functionName: 'claimReward',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestAbi}__
 */
export const useSimulateIQuest = /*#__PURE__*/ createUseSimulateContract({
  abi: iQuestAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestAbi}__ and `functionName` set to `"claimReward"`
 */
export const useSimulateIQuestClaimReward =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iQuestAbi,
    functionName: 'claimReward',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questsCollectionAbi}__
 */
export const useReadQuestsCollection = /*#__PURE__*/ createUseReadContract({
  abi: questsCollectionAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"getQuest"`
 */
export const useReadQuestsCollectionGetQuest =
  /*#__PURE__*/ createUseReadContract({
    abi: questsCollectionAbi,
    functionName: 'getQuest',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"getQuestsCount"`
 */
export const useReadQuestsCollectionGetQuestsCount =
  /*#__PURE__*/ createUseReadContract({
    abi: questsCollectionAbi,
    functionName: 'getQuestsCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"metadata"`
 */
export const useReadQuestsCollectionMetadata =
  /*#__PURE__*/ createUseReadContract({
    abi: questsCollectionAbi,
    functionName: 'metadata',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"owner"`
 */
export const useReadQuestsCollectionOwner = /*#__PURE__*/ createUseReadContract(
  { abi: questsCollectionAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"quests"`
 */
export const useReadQuestsCollectionQuests =
  /*#__PURE__*/ createUseReadContract({
    abi: questsCollectionAbi,
    functionName: 'quests',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questsCollectionAbi}__
 */
export const useWriteQuestsCollection = /*#__PURE__*/ createUseWriteContract({
  abi: questsCollectionAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"setQuests"`
 */
export const useWriteQuestsCollectionSetQuests =
  /*#__PURE__*/ createUseWriteContract({
    abi: questsCollectionAbi,
    functionName: 'setQuests',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questsCollectionAbi}__
 */
export const useSimulateQuestsCollection =
  /*#__PURE__*/ createUseSimulateContract({ abi: questsCollectionAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"setQuests"`
 */
export const useSimulateQuestsCollectionSetQuests =
  /*#__PURE__*/ createUseSimulateContract({
    abi: questsCollectionAbi,
    functionName: 'setQuests',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questsCollectionAbi}__
 */
export const useWatchQuestsCollectionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: questsCollectionAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questsCollectionAbi}__ and `eventName` set to `"QuestAdded"`
 */
export const useWatchQuestsCollectionQuestAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: questsCollectionAbi,
    eventName: 'QuestAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questsCollectionAbi}__ and `eventName` set to `"QuestEdited"`
 */
export const useWatchQuestsCollectionQuestEditedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: questsCollectionAbi,
    eventName: 'QuestEdited',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questsCollectionAbi}__ and `eventName` set to `"QuestRemoved"`
 */
export const useWatchQuestsCollectionQuestRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: questsCollectionAbi,
    eventName: 'QuestRemoved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questsCollectionFactoryAbi}__
 */
export const useReadQuestsCollectionFactory =
  /*#__PURE__*/ createUseReadContract({ abi: questsCollectionFactoryAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questsCollectionFactoryAbi}__ and `functionName` set to `"deployedContracts"`
 */
export const useReadQuestsCollectionFactoryDeployedContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: questsCollectionFactoryAbi,
    functionName: 'deployedContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questsCollectionFactoryAbi}__ and `functionName` set to `"getDeployedContracts"`
 */
export const useReadQuestsCollectionFactoryGetDeployedContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: questsCollectionFactoryAbi,
    functionName: 'getDeployedContracts',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questsCollectionFactoryAbi}__
 */
export const useWriteQuestsCollectionFactory =
  /*#__PURE__*/ createUseWriteContract({ abi: questsCollectionFactoryAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questsCollectionFactoryAbi}__ and `functionName` set to `"deployContract"`
 */
export const useWriteQuestsCollectionFactoryDeployContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: questsCollectionFactoryAbi,
    functionName: 'deployContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questsCollectionFactoryAbi}__
 */
export const useSimulateQuestsCollectionFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: questsCollectionFactoryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questsCollectionFactoryAbi}__ and `functionName` set to `"deployContract"`
 */
export const useSimulateQuestsCollectionFactoryDeployContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: questsCollectionFactoryAbi,
    functionName: 'deployContract',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questsCollectionFactoryAbi}__
 */
export const useWatchQuestsCollectionFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: questsCollectionFactoryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questsCollectionFactoryAbi}__ and `eventName` set to `"ContractDeployed"`
 */
export const useWatchQuestsCollectionFactoryContractDeployedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: questsCollectionFactoryAbi,
    eventName: 'ContractDeployed',
  })
