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
import { handleWeb3Error } from '../utils/handleWeb3Error';
import { Topbar } from '../components/Topbar';

export interface QuestsCollectionCreatePageProps {

}

export const QuestsCollectionCreatePage: FC<QuestsCollectionCreatePageProps> = () => {
  const navigate = useNavigate();
  const acc = useAccount();
  const [loading, setLoading] = useState(false);
  const [deployedData, setDeployedData] = useState<CreateQuestsCollectionFormValues>();
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
      toast.success('Deployment successful');
      if (!deployedData) return;
      void (async () => {
        await createQuestsApiMutation.mutateAsync({
          address: topics.args.newContractAddress,
          name: deployedData.name,
          description: deployedData.description,
          logo: deployedData.logo,
          cover: deployedData.cover,
          owner: acc.address as string,
        })
        setLoading(false);
        navigate(`/quests-collections/${topics.args.newContractAddress}/manage`);
      })();
    }
  }, [navigate, txData]);
  const onSubmit = async (data: CreateQuestsCollectionFormValues) => {
    setLoading(true);
    const metadata = await uploadJSONToWeb3Storage({
      ...data,
      quests: [],
    });
    try {
      await writeContractAsync({
        address: FACTORY.address as `0x${string}`,
        args: [metadata]
      });
      setDeployedData(data);
    } catch (error) {
      handleWeb3Error(error);
      setLoading(false);
    }
  };
  const form = useForm<CreateQuestsCollectionFormValues>();
  return (
    <div>
      <Topbar />
      <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white w-full max-w-xl border rounded-md shadow-sm">
          <div className="p-8">
            <CreateQuestsCollectionForm
              form={form}
              onSubmit={(data) => onSubmit(data)}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
