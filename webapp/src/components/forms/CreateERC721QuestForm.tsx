import React, { FC } from "react";
import { Form, FormProps } from "../Form";
import { TextFormInput } from "./inputs/TextFormInput";
import { NumberFormInput } from "./inputs/NumberFormInput";

export interface CreateERC721QuestFormValues {
  nftCollectionAddress: string;
  minAmountOfTokens: number;
}

export interface CreateERC721QuestFormProps
  extends Omit<FormProps<CreateERC721QuestFormValues>, "children"> {
  footer?: React.ReactNode;
}

export const CreateERC721QuestForm: FC<CreateERC721QuestFormProps> = ({
  form,
  onSubmit,
  footer = (
    <div className="mt-2 flex justify-end">
      <button
        className="btn btn-primary btn-block"
        type="submit"
        disabled={!form.formState.isDirty}
      >
        Submit
      </button>
    </div>
  ),
}) => {
  return (
    <Form form={form} onSubmit={onSubmit}>
      <TextFormInput name="nftCollectionAddress" label="NFT Collection Address" />
      <NumberFormInput name="minAmountOfTokens" label="Minimum Amount of Tokens" />
      {footer}
    </Form>
  );
};