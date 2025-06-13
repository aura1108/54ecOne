import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserAuthTitle } from "../userAuth/UserAuthTitle";

export const UserDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateofbirth" source="dateofbirth" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="occupation" source="occupation" />
        <TextInput label="pan" source="pan" />
        <ReferenceInput
          source="userAuth.id"
          reference="UserAuth"
          label="userAuth"
        >
          <SelectInput optionText={UserAuthTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
