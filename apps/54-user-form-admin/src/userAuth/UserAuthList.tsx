import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserAuthList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UserAuths"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="otp" source="otp" />
        <TextField label="pan" source="pan" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="verified" source="verified" />{" "}
      </Datagrid>
    </List>
  );
};
