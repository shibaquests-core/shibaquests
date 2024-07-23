import React, { FC } from 'react'
import { TextFormInput } from './inputs/TextFormInput';
import { Form, FormProps } from '../Form';

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
    </Form>
  )
}
