import { FC, useEffect, useState } from 'react'
import { CreateQuestsCollectionForm, CreateQuestsCollectionFormValues } from '../components/forms/CreateQuestsCollectionForm';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { questsCollectionFactoryAbi, useWriteQuestsCollectionFactoryDeployContract } from '../generated';
import { decodeEventLog } from 'viem';
import { FACTORY } from '../consts/factory';
import { toast } from 'react-toastify';
import { uploadJSONToWeb3Storage } from '../utils/web3Storage';
import { useMutation } from '@tanstack/react-query';
import { createQuestCollection } from '../client/mutations/createQuestCollection';

export interface QuestsCollectionCreatePageProps {
  
}

export const QuestsCollectionCreatePage: FC<QuestsCollectionCreatePageProps> = (props) => {
  const navigate = useNavigate();
  const acc = useAccount();
  const [loading, setLoading] = useState(false);
  const [deployedAddress, setDeployedAddress] = useState<string>();
  // const form = useForm({});
  const { writeContractAsync, data } = useWriteQuestsCollectionFactoryDeployContract();
  const { data: txData } = useWaitForTransactionReceipt({
    hash: data,
  });
  const createQuestsApiMutation = useMutation({
    mutationKey: ['createQuestsCollectionApi'],
    mutationFn: createQuestCollection,
  })
  useEffect(() => {
    if (txData && txData?.logs) {
      const logs = txData.logs;
      const topics = decodeEventLog({
        abi: questsCollectionFactoryAbi,
        data: logs[0].data,
        topics: logs[0].topics,
      });
      setLoading(false);
      toast.success('Deployment successful');
      setDeployedAddress(topics.args.newContractAddress);
    }
  }, [navigate, txData]);
  const onSubmit = async (data: CreateQuestsCollectionFormValues) => {
    const metadata = await uploadJSONToWeb3Storage(data);
    setLoading(true);
    await writeContractAsync({
      address: FACTORY.address as `0x${string}`,
      args: [metadata]
    });
    await createQuestsApiMutation.mutateAsync({
      address: deployedAddress!,
      name: data.name,
      description: data.description,
      logo: data.logo,
      cover: data.cover,
      owner: acc.address as string,
    });
    navigate(`/quests-collections/${deployedAddress!}/manage`);
  };
  const form = useForm<CreateQuestsCollectionFormValues>();
  return (
    <div className="w-screen h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl border rounded-md shadow-sm">
        <div className="p-8">
          <CreateQuestsCollectionForm form={form} onSubmit={(data) => onSubmit(data)} />
        </div>
      </div>
    </div>
  )
}
