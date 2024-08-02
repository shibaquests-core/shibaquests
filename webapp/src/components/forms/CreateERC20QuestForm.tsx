import React, { FC } from "react";
import { Form, FormProps } from "../Form";
import { TextFormInput } from "./inputs/TextFormInput";
import { NumberFormInput } from "./inputs/NumberFormInput";

export interface CreateERC20QuestFormValues {
  contractAddress: string;
  minimumAmount: number;
}

export interface CreateERC20QuestFormProps
  extends Omit<FormProps<CreateERC20QuestFormValues>, "children"> {
  footer?: React.ReactNode;
}

export const CreateERC20QuestForm: FC<CreateERC20QuestFormProps> = ({
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
      <TextFormInput name="contractAddress" label="Contract Address" />
      <NumberFormInput name="minimumAmount" label="Minimum Amount of Tokens" />
      {footer}
    </Form>
  );
};