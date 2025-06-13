import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { UserDetailTitle } from "../userDetail/UserDetailTitle";

export const UserAuthCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="otp" source="otp" />
        <TextInput label="pan" source="pan" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput source="userDetails" reference="UserDetail">
          <SelectArrayInput
            optionText={UserDetailTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="verified" source="verified" />
      </SimpleForm>
    </Create>
  );
};
