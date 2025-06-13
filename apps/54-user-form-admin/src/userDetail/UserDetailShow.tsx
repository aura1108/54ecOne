import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERAUTH_TITLE_FIELD } from "../userAuth/UserAuthTitle";

export const UserDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateofbirth" source="dateofbirth" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="occupation" source="occupation" />
        <TextField label="pan" source="pan" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="userAuth"
          source="userauth.id"
          reference="UserAuth"
        >
          <TextField source={USERAUTH_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
