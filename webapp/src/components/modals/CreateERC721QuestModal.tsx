import { FC, useEffect, useState } from 'react'
import { Form } from '../Form';
import { useForm } from 'react-hook-form';
import { TextFormInput } from '../forms/inputs/TextFormInput';
import { RichTextFormInput } from '../forms/inputs/RichTextFormInput';
import { erc721QuestFactoryAbi, useWriteErc721QuestFactoryDeployContract } from '../../generated';
import { useWaitForTransactionReceipt } from 'wagmi';
import { decodeEventLog } from 'viem';
import { toast } from 'react-toastify';
import { DeployedQuest } from '../../types';
import { ImageUploaderFormInput } from '../forms/inputs/ImageUploaderFormInput';
import { LoadingButton } from '../LoadingButton';
import { useWaitForTransactionReceiptAsync } from '../../hooks/useWaitForTransactionReceiptAsync';
import { handleWeb3Error } from '../../utils/handleWeb3Error';
import { NumberFormInput } from '../forms/inputs/NumberFormInput';
import { clearEditor } from '../../utils/clearEditor';

export const CreateERC721ModalId = 'create-erc721-quest-modal';

export interface CreateERC721ModalFormValues {
  icon: string;
  name: string;
  description: string;
  erc721Address: string;
  minTokens: number;
}

export interface CreateERC721ModalProps {
  onDeployed: (quest: DeployedQuest) => void;
}

export const CreateERC721Modal: FC<CreateERC721ModalProps> = (props) => {
  const waitTxn = useWaitForTransactionReceiptAsync();
  const [loading, setLoading] = useState(false);
  const form = useForm<CreateERC721ModalFormValues>();
  const { writeContractAsync, data } = useWriteErc721QuestFactoryDeployContract();
  const { data: txData } = useWaitForTransactionReceipt({
    hash: data,
  });
  const closeModal = () => {
    const modal = document.getElementById(CreateERC721ModalId) as HTMLElement  & { close: () => void };
    modal.close();
  };
  const onSubmit = async (data: CreateERC721ModalFormValues) => {
    setLoading(true);
    try {      
      const txn = await writeContractAsync({
        address: import.meta.env.VITE_ERC721_QUEST_FACTORY_ADDRESS as `0x${string}`,
        args: [
          data.erc721Address as `0x${string}`,
          BigInt(data.minTokens),
        ],
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
        abi: erc721QuestFactoryAbi,
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
      clearEditor();
    }
  }, [txData]);
  return (
    <Form form={form} onSubmit={onSubmit}>
      <dialog id={CreateERC721ModalId} className="modal">
        <div className="modal-box">
        <h3 className="font-bold text-lg">
            Create ERC-721 Quest
          </h3>
          <p className="py-4 text-sm">
            ERC-721 Quest is completed when the user has the required tokens in their wallet.
          </p>
          <div className="py-2">
            <ImageUploaderFormInput name="icon" label="Quest Icon" previewWidth={64} previewHeight={64} />
            <TextFormInput name="name" label="Quest Name" />
            <RichTextFormInput name="description" label="Quest Description" />
            <TextFormInput name="erc721Address" label="ERC721 Contract Address" />
            <NumberFormInput name="minTokens" label="Min Tokens" />
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
