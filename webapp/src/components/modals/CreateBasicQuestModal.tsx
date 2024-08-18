import { FC, useEffect, useState } from 'react'
import { Form } from '../Form';
import { useForm } from 'react-hook-form';
import { TextFormInput } from '../forms/inputs/TextFormInput';
import { RichTextFormInput } from '../forms/inputs/RichTextFormInput';
import { basicQuestFactoryAbi, useWriteBasicQuestFactoryDeployContract } from '../../generated';
import { useWaitForTransactionReceipt } from 'wagmi';
import { decodeEventLog } from 'viem';
import { toast } from 'react-toastify';
import { DeployedQuest } from '../../types';
import { ImageUploaderFormInput } from '../forms/inputs/ImageUploaderFormInput';
import { LoadingButton } from '../LoadingButton';
import { useWaitForTransactionReceiptAsync } from '../../hooks/useWaitForTransactionReceiptAsync';
import { handleWeb3Error } from '../../utils/handleWeb3Error';

export const CreateBasicQuestModalId = 'create-basic-quest-modal';

export interface CreateBasicQuestModalFormValues {
  icon: string;
  name: string;
  description: string;
}

export interface CreateBasicQuestModalProps {
  onDeployed: (quest: DeployedQuest) => void;
}

export const CreateBasicQuestModal: FC<CreateBasicQuestModalProps> = (props) => {
  const waitTxn = useWaitForTransactionReceiptAsync();
  const [loading, setLoading] = useState(false);
  const form = useForm<CreateBasicQuestModalFormValues>();
  const { writeContractAsync, data } = useWriteBasicQuestFactoryDeployContract();
  const { data: txData } = useWaitForTransactionReceipt({
    hash: data,
  });
  const closeModal = () => {
    const modal = document.getElementById(CreateBasicQuestModalId) as HTMLElement  & { close: () => void };
    modal.close();
  };
  const onSubmit = async () => {
    setLoading(true);
    try {      
      const txn = await writeContractAsync({
        address: import.meta.env.VITE_BASIC_QUEST_FACTORY_ADDRESS as `0x${string}`,
      });
      await waitTxn(txn);
    } catch (error) {
      handleWeb3Error(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (txData && txData?.logs) {
      const logs = txData.logs;
      const topics = decodeEventLog({
        abi: basicQuestFactoryAbi,
        data: logs[0].data,
        topics: logs[0].topics,
      });
      setLoading(false);
      toast.success('Deployment successful');
      props.onDeployed({
        address: topics.args.newContractAddress,
        icon: form.getValues().icon,
        name: form.getValues().name,
        description: form.getValues().description,
      });
      closeModal();
      form.reset();
    }
  }, [txData]);
  return (
    <Form form={form} onSubmit={onSubmit}>
      <dialog id={CreateBasicQuestModalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Create Basic Quest
          </h3>
          <p className="py-4 text-sm">
            BasicQuest is completed by default and anyone can claim the reward.
          </p>
          <div className="py-2">
            <ImageUploaderFormInput name="icon" label="Quest Icon" previewWidth={64} previewHeight={64} />
            <TextFormInput name="name" label="Quest Name" />
            <RichTextFormInput name="description" label="Quest Description" />
          </div>
          <div className="modal-action">
            <button type="button" className="btn" onClick={() => closeModal()}>Cancel</button>
            <LoadingButton
              type="submit"
              label="Deploy & Add"
              loadingLabel='Deploying...'
              loading={loading}
            />
          </div>
        </div>
      </dialog>
    </Form>
  )
}
