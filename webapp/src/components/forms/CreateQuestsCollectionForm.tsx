import { FC } from 'react'
import { TextFormInput } from './inputs/TextFormInput';
import { Form, FormProps } from '../Form';
import { ImageUploaderFormInput } from './inputs/ImageUploaderFormInput';
import { RichTextFormInput } from './inputs/RichTextFormInput';
import { LoadingButton } from '../LoadingButton';

export interface CreateQuestsCollectionFormValues {
  name: string;
  description: string;
  logo: string;
  cover: string;
}

export interface CreateQuestsCollectionFormProps
  extends Omit<FormProps<CreateQuestsCollectionFormValues>, "children"> {
  loading: boolean;
}

export const CreateQuestsCollectionForm: FC<CreateQuestsCollectionFormProps> = ({ loading, form, onSubmit }) => {
  return (
    <Form form={form} onSubmit={onSubmit}>
      <TextFormInput name="name" label="Quests Collection Name" />
      <RichTextFormInput name="description" label="Description" />
      <ImageUploaderFormInput name="logo" label="Logo Image" previewHeight={120} previewWidth={120} />
      <ImageUploaderFormInput name="cover" label="Cover Image" previewHeight={120} previewWidth={240} />

      <div className="border-t pt-2 flex justify-end">
        <LoadingButton
          type="submit"
          label="Create"
          loadingLabel="Creating..."
          loading={loading}
        />
      </div>
    </Form>
  )
}
