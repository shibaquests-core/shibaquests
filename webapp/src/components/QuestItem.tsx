import { CheckCircleIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import { FC, useState } from 'react'
import { DeployedQuest } from '../types'
import { getCIDLink } from '../utils/web3Storage';
import { useReadIQuestIsClaimedByAddress, useReadIQuestIsCompletedByAddress, useWriteIQuestClaimReward } from '../generated';
import { useAccount, useClient } from 'wagmi';
import { useWaitForTransactionReceiptAsync } from '../hooks/useWaitForTransactionReceiptAsync';
import { LoadingButton } from './LoadingButton';
import { handleWeb3Error } from '../utils/handleWeb3Error';

export interface QuestItemProps {
  quest: DeployedQuest & { completed?: boolean };
}

export const QuestItem: FC<QuestItemProps> = ({ quest }) => {
  const [loadingClaim, setLoadingClaim] = useState(false);
  const waitForTxn = useWaitForTransactionReceiptAsync();
  const wagmiClient = useClient();
  const acc = useAccount();
  const {data: isCompleted, refetch: refreshIsCompleted } = useReadIQuestIsCompletedByAddress({
    address: quest.address as `0x${string}`,
    args: [
      acc.address as `0x${string}`,
    ]
  });
  const { data: isClaimed, refetch: refreshIsClaimed } = useReadIQuestIsClaimedByAddress({
    address: quest.address as `0x${string}`,
    args: [
      acc.address as `0x${string}`,
    ]
  });

  const { writeContractAsync: claimContractAsync } = useWriteIQuestClaimReward();
  const claim = async () => {
    setLoadingClaim(true);
    try {
      if (!wagmiClient) {
        return;
      }
      const txnHash = await claimContractAsync({
        address: quest.address as `0x${string}`,
      });
      await waitForTxn(txnHash);
      await refreshIsCompleted();
      await refreshIsClaimed();
    } catch (error) {
      handleWeb3Error(error);
    }
    setLoadingClaim(false);
  }

  return (
    <div className="border border-gray-300 rounded-md w-full">
      <div className="flex p-8">
        <div className="shrink-0 w-16 h-16 relative">
          {!isCompleted && (
            <div className="absolute top-0 right-0 w-16 h-16 rounded-md bg-[rgba(119,119,119,0.9)] flex items-center justify-center">
              <LockClosedIcon className="h-6 w-6 text-white" />
            </div>
          )}
          <img src={getCIDLink(quest.icon)} className="h-16 w-16 border-4 border-gray-500 rounded-md" />
        </div>
        <div className="pl-4 w-full">
          <div>
            <h1 className="text-xl font-semibold text-gray-700">{quest.name}</h1>
            <div>
              <p className="text-gray-600">{quest.description}</p>
            </div>
          </div>
        </div>
      </div>
        <div className="w-full grid grid-cols-2 mt-4 border-t">
          <button className="btn btn-ghost btn-block rounded-none rounded-bl-md">Read More</button>
          {!isCompleted ? (
              <button className="btn btn-disabled btn-block opacity-70 rounded-none rounded-br-md">
                <LockClosedIcon className="h-6 w-6" />
              </button>
          ): (
            isClaimed ? (
              <div className="flex items-center justify-center">
                <div className="flex text-green-500 font-bold">
                  <CheckCircleIcon className="h-6 w-6 mr-2" />
                  Completed
                </div>
            </div>
            ): (
              <LoadingButton
                onClick={claim} className="btn btn-primary btn-block rounded-none rounded-br-md"
                loading={loadingClaim}
                label='Claim'
                loadingLabel='Claiming...'
              />
            )
          )}
        </div>
    </div>
  )
}
