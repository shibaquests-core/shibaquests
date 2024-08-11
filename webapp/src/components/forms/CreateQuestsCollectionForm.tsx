import { FC } from 'react'
import { TextFormInput } from './inputs/TextFormInput';
import { Form, FormProps } from '../Form';
import { ImageUploaderFormInput } from './inputs/ImageUploaderFormInput';
import { RichTextFormInput } from './inputs/RichTextFormInput';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export interface CreateQuestsCollectionFormValues {
  name: string;
  description: string;
  logo: string;
  cover: string;
}

export interface CreateQuestsCollectionFormProps
  extends Omit<FormProps<CreateQuestsCollectionFormValues>, "children">  {
  
}

export const CreateQuestsCollectionForm: FC<CreateQuestsCollectionFormProps> = ({ form, onSubmit }) => {
  return (
    <Form form={form} onSubmit={onSubmit}>
      <TextFormInput name="name" label="Quests Collection Name" />
      <RichTextFormInput name="description" label="Description" />
      <ImageUploaderFormInput name="logo" label="Logo Image" previewHeight={120} previewWidth={120} />
      <ImageUploaderFormInput name="cover" label="Cover Image" previewHeight={120} previewWidth={240} />

      <div className="border-t pt-2 flex justify-end">
        <button type="submit" className="btn btn-primary">
          Create Collection
          <ChevronRightIcon className="h-5 w-5 ms-2" />
        </button>
      </div>
    </Form>
  )
}
