import React, { FC } from 'react'
import { TextFormInput } from './inputs/TextFormInput';
import { Form, FormProps } from '../Form';
import { ImageUploaderFormInput } from './inputs/ImageUploaderFormInput';
import { RichTextFormInput } from './inputs/RichTextFormInput';

export interface CreateQuestsCollectionFormValues {
  name: string;
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
    </Form>
  )
}
