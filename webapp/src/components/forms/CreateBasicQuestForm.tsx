import React, { FC } from "react";
import { Form, FormProps } from "../Form";
import { TextFormInput } from "./inputs/TextFormInput";
import { RichTextFormInput } from "./inputs/RichTextFormInput";

export interface CreateBasicQuestFormValues {
  name: string;
  description: string;
}

export interface CreateBasicQuestFormProps
  extends Omit<FormProps<CreateBasicQuestFormValues>, "children"> {
  footer?: React.ReactNode;
}

export const CreateBasicQuestForm: FC<CreateBasicQuestFormProps> = ({
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
      <TextFormInput name="name" label="Name" />
      <RichTextFormInput name="description" label="Description" />
      {footer}
    </Form>
  );
};
