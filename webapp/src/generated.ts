import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QuestsCollection
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const questsCollectionAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
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
    inputs: [{ name: '_quest', internalType: 'address', type: 'address' }],
    name: 'addQuest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_index', internalType: 'uint256', type: 'uint256' },
      { name: '_newQuest', internalType: 'address', type: 'address' },
    ],
    name: 'editQuest',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [{ name: '_index', internalType: 'uint256', type: 'uint256' }],
    name: 'removeQuest',
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
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"addQuest"`
 */
export const useWriteQuestsCollectionAddQuest =
  /*#__PURE__*/ createUseWriteContract({
    abi: questsCollectionAbi,
    functionName: 'addQuest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"editQuest"`
 */
export const useWriteQuestsCollectionEditQuest =
  /*#__PURE__*/ createUseWriteContract({
    abi: questsCollectionAbi,
    functionName: 'editQuest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"removeQuest"`
 */
export const useWriteQuestsCollectionRemoveQuest =
  /*#__PURE__*/ createUseWriteContract({
    abi: questsCollectionAbi,
    functionName: 'removeQuest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questsCollectionAbi}__
 */
export const useSimulateQuestsCollection =
  /*#__PURE__*/ createUseSimulateContract({ abi: questsCollectionAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"addQuest"`
 */
export const useSimulateQuestsCollectionAddQuest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: questsCollectionAbi,
    functionName: 'addQuest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"editQuest"`
 */
export const useSimulateQuestsCollectionEditQuest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: questsCollectionAbi,
    functionName: 'editQuest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questsCollectionAbi}__ and `functionName` set to `"removeQuest"`
 */
export const useSimulateQuestsCollectionRemoveQuest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: questsCollectionAbi,
    functionName: 'removeQuest',
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
