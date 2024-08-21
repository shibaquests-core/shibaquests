import { FC } from 'react'
import { Form } from '../Form';
import { useForm } from 'react-hook-form';
import { TextFormInput } from '../forms/inputs/TextFormInput';
import { RichTextFormInput } from '../forms/inputs/RichTextFormInput';
import { DeployedQuest } from '../../types';
import { ImageUploaderFormInput } from '../forms/inputs/ImageUploaderFormInput';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { clearEditor } from '../../utils/clearEditor';

export const CreateCustomContractModalId = 'create-custom-contract-quest-modal';

export interface CreateCustomContractModalFormValues {
  icon: string;
  name: string;
  description: string;
  contractAddress: string;
}

export interface CreateCustomContractModalProps {
  onDeployed: (quest: DeployedQuest) => void;
}

export const CreateCustomContractModal: FC<CreateCustomContractModalProps> = (props) => {
  const form = useForm<CreateCustomContractModalFormValues>();
  const closeModal = () => {
    const modal = document.getElementById(CreateCustomContractModalId) as HTMLElement & { close: () => void };
    modal.close();
  };
  const onSubmit = async (data: CreateCustomContractModalFormValues) => {
    props.onDeployed({
      address: data.contractAddress,
      icon: form.getValues().icon,
      name: form.getValues().name,
      description: form.getValues().description,
    });
    closeModal();
    form.reset();
    clearEditor();
  }
  return (
    <Form form={form} onSubmit={onSubmit}>
      <dialog id={CreateCustomContractModalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Create Basic Quest
          </h3>
          <p className="py-4 text-sm">
            This quest is completed by a custom logic on a contract that you deploy. This is useful for more complex quests that require custom logic.
          </p>
          <div className="py-2">
            <ImageUploaderFormInput name="icon" label="Quest Icon" previewWidth={64} previewHeight={64} />
            <TextFormInput name="name" label="Quest Name" />
            <RichTextFormInput name="description" label="Quest Description" />
            <TextFormInput name="address" label="Contract Address" />
            <div role="alert" className="alert">
              <InformationCircleIcon className="h-6 w-6 text-blue-500" />
              <div>
                <div className="text-sm">
                  The provided contract must implement the <code>IQuest</code> interface.
                </div>
              </div>
              <a className="btn btn-sm" href="https://github.com/shibaquests-core/shibaquests" target="_blank">Read More</a>
            </div>
          </div>
          <div className="modal-action">
            <button type="button" className="btn" onClick={() => closeModal()}>Cancel</button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Add Custom Contract
            </button>
          </div>
        </div>
      </dialog>
    </Form>
  )
}
